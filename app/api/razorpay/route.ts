import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { PRICES, DEFAULT_PRICE } from "@/lib/prices";

// ── CREATE ORDER ──────────────────────────────────────────────
// POST /api/razorpay
// Body: { productTitle: string }
// ⚠️ Amount is ALWAYS looked up server-side — never trusted from frontend
export async function POST(req: NextRequest) {
  try {
    const { productTitle } = await req.json();

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay keys not configured" },
        { status: 500 },
      );
    }

    // ✅ Look up price server-side from catalog — frontend cannot manipulate
    const price = PRICES[productTitle] ?? DEFAULT_PRICE;

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
      },
      body: JSON.stringify({
        amount: price.inr * 100, // paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        notes: {
          product: productTitle,
          price_usd: `$${price.usd}`,
          price_inr: `₹${price.inr}`,
        },
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      return NextResponse.json(
        { error: err.error?.description || "Failed to create order" },
        { status: response.status },
      );
    }

    const order = await response.json();

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount, // trusted — comes back from Razorpay
      currency: order.currency,
      keyId,
      priceUsd: price.usd, // for display in checkout popup
    });
  } catch (err) {
    console.error("Razorpay order error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
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
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expected = crypto
      .createHmac("sha256", keySecret)
      .update(body)
      .digest("hex");

    const isValid = expected === razorpay_signature;

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: "Invalid payment signature" },
        { status: 400 },
      );
    }

    // ✅ Payment verified — you can save to DB here if needed
    return NextResponse.json({
      success: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (err) {
    console.error("Razorpay verify error:", err);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
