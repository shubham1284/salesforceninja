import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// ── CREATE ORDER ──────────────────────────────────────────────
// POST /api/razorpay
// Body: { amount: number, productTitle: string }
export async function POST(req: NextRequest) {
  try {
    const { amount, productTitle } = await req.json();

    // Keys read server-side only — never exposed to browser
    const keyId     = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay keys not configured" },
        { status: 500 }
      );
    }

    // Create order via Razorpay API
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
      },
      body: JSON.stringify({
        amount: amount * 100, // Razorpay expects paise (₹149 = 14900)
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        notes: {
          product: productTitle,
        },
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      return NextResponse.json(
        { error: err.error?.description || "Failed to create order" },
        { status: response.status }
      );
    }

    const order = await response.json();

    return NextResponse.json({
      orderId:  order.id,
      amount:   order.amount,
      currency: order.currency,
      keyId,    // safe to send — this is the public key
    });

  } catch (err) {
    console.error("Razorpay order error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ── VERIFY PAYMENT ────────────────────────────────────────────
// PUT /api/razorpay
// Body: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
export async function PUT(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      await req.json();

    const keySecret = process.env.RAZORPAY_KEY_SECRET!;

    // Verify signature using HMAC SHA256
    const body      = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expected  = crypto
      .createHmac("sha256", keySecret)
      .update(body)
      .digest("hex");

    const isValid = expected === razorpay_signature;

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // ✅ Payment verified — you can save to DB here if needed
    return NextResponse.json({
      success:   true,
      paymentId: razorpay_payment_id,
      orderId:   razorpay_order_id,
    });

  } catch (err) {
    console.error("Razorpay verify error:", err);
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 }
    );
  }
}
