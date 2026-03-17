"use client";

import { useState } from "react";
import { PRICES, DEFAULT_PRICE } from "@/lib/prices";

// Razorpay global type
declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, handler: () => void) => void;
    };
  }
}

const BASE_URL = "https://cube8441-dev-ed.develop.my.site.com/CodeWithShubham";

const products = [
  {
    num: "01",
    iconColor: "#D4AF6A",
    iconBg: "rgba(212,175,106,0.15)",
    badge: "Account Management",
    badgeColor: "bdg-gold",
    tags: [
      { label: "Inline Editing", cls: "tag-green" },
      { label: "Data Grid", cls: "" },
    ],
    title: "smartAccountGrid",
    desc: "An interactive view of customer accounts — search, filter, and manage records from a single screen with 360° overview of contacts, opportunities, and cases.",
    bizValue:
      "Enables quick updates, bulk actions, and inline editing without navigating multiple pages.",
    meta: "LWC · LWR Site",
    demoUrl: `${BASE_URL}/account-intelligence`,
    bar: "bar-gold",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    num: "02",
    iconColor: "#A78BFA",
    iconBg: "rgba(167,139,250,0.15)",
    badge: "AI Powered",
    badgeColor: "bdg-purple",
    tags: [
      { label: "Natural Language", cls: "tag-green" },
      { label: "Chat Interface", cls: "" },
    ],
    title: "Salesforce AI Assistant Chat",
    desc: "An AI-powered chat interface for asking questions about Salesforce data — opportunities, accounts, leads, and cases with real-time conversational insights.",
    bizValue:
      "Improves productivity by enabling natural language retrieval of Salesforce insights instead of manual reports.",
    meta: "LWC · AI · LWR Site",
    demoUrl: `${BASE_URL}/salesforce-ai-assistant`,
    bar: "bar-purple",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    iconColor: "#FB923C",
    iconBg: "rgba(251,146,60,0.15)",
    badge: "Case Management",
    badgeColor: "bdg-orange",
    tags: [
      { label: "Customer Support", cls: "tag-green" },
      { label: "Dashboard", cls: "" },
    ],
    title: "Customer Case Management Dashboard",
    desc: "A centralized dashboard for managing support cases — view lists, search, filter, track key metrics, and access detailed case info including activities and comments.",
    bizValue:
      "Gives support teams a single interface to monitor, manage, and resolve cases efficiently.",
    meta: "LWC · LWR Site",
    demoUrl: `${BASE_URL}/customer-case-management-dashboard`,
    bar: "bar-orange",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: "04",
    iconColor: "#3ECFB2",
    iconBg: "rgba(62,207,178,0.15)",
    badge: "AI Powered",
    badgeColor: "bdg-purple",
    tags: [
      { label: "Lead Scoring", cls: "tag-green" },
      { label: "Sales", cls: "" },
    ],
    title: "AI Lead Scoring & Prioritization Board",
    desc: "An AI-driven workspace that scores, ranks, and segments leads based on engagement, intent, and activity with next-best-action recommendations.",
    bizValue:
      "Helps sales teams focus on the most promising leads using AI-identified conversion potential.",
    meta: "LWC · AI · LWR Site",
    demoUrl: `${BASE_URL}/ai-lead-scoring-board`,
    bar: "bar-emerald",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: "05",
    iconColor: "#22D3EE",
    iconBg: "rgba(34,211,238,0.15)",
    badge: "Revenue Ops",
    badgeColor: "bdg-cyan",
    tags: [
      { label: "Pipeline", cls: "tag-green" },
      { label: "Contracts", cls: "tag-orange" },
    ],
    title: "Revenue Operations Management Hub",
    desc: "A centralized workspace for the entire opportunity and contract lifecycle — dashboards, pipeline views, contract management, account views, and analytics.",
    bizValue:
      "Improves operational visibility across sales and contract processes to support revenue growth.",
    meta: "LWC · LWR Site",
    demoUrl: `${BASE_URL}/revenue-operations-management`,
    bar: "bar-cyan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    num: "06",
    iconColor: "#A78BFA",
    iconBg: "rgba(167,139,250,0.15)",
    badge: "Doc Generation",
    badgeColor: "bdg-purple",
    tags: [
      { label: "E-Signature", cls: "tag-green" },
      { label: "Templates", cls: "" },
    ],
    title: "Smart Document Generation & E-Signature Manager",
    desc: "Generate proposals, agreements, and quotes from Salesforce records. Select a template, auto-populate fields, preview, and send for e-signature.",
    bizValue:
      "Streamlines document creation by automating template selection and data population from Salesforce.",
    meta: "LWC · LWR Site",
    demoUrl: `${BASE_URL}/document-generation-signature-manager`,
    bar: "bar-purple",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    num: "07",
    iconColor: "#3ECFB2",
    iconBg: "rgba(62,207,178,0.15)",
    badge: "Customer 360",
    badgeColor: "bdg-emerald",
    tags: [
      { label: "Timeline", cls: "tag-green" },
      { label: "Interactions", cls: "tag-orange" },
    ],
    title: "Customer 360 Interaction Timeline",
    desc: "A unified timeline of all customer interactions — emails, calls, cases, meetings, tasks, opportunities, and notes organized chronologically with filters.",
    bizValue:
      "Gives teams a complete 360° view of customer engagement and support history in one place.",
    meta: "LWC · LWR Site",
    demoUrl: `${BASE_URL}/customer-360-interaction-timeline`,
    bar: "bar-emerald",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    num: "08",
    iconColor: "#22D3EE",
    iconBg: "rgba(34,211,238,0.15)",
    badge: "Account Detail",
    badgeColor: "bdg-cyan",
    tags: [
      { label: "Inline Editing", cls: "tag-green" },
      { label: "Related Lists", cls: "tag-orange" },
    ],
    title: "Account Detail Page",
    desc: "Full-featured account record page with live health score, stats ribbon, and always-on edit sidebar. Manage contacts, opportunities, cases, activities, and files from five tabs.",
    bizValue:
      "Eliminates context-switching by consolidating every account touchpoint into a single interface.",
    meta: "LWC · LWR Site",
    demoUrl: `${BASE_URL}/accountdetails`,
    bar: "bar-cyan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
      </svg>
    ),
  },
  {
    num: "09",
    iconColor: "#818CF8",
    iconBg: "rgba(129,140,248,0.15)",
    badge: "Multi-Step Wizard",
    badgeColor: "bdg-indigo",
    tags: [
      { label: "Auto-Create", cls: "tag-green" },
      { label: "Account · Contact · Opp", cls: "" },
    ],
    title: "Premium Account Creation Wizard",
    desc: "A guided 4-step wizard to create an Account, Contacts, and Opportunities in one flow. Animated progress rings, drag-to-reorder cards, live preview sidebar, and completion score.",
    bizValue:
      "Eliminates separate object pages — capture full account profile and pipeline in one seamless session.",
    meta: "LWC · Apex · LWR Site",
    demoUrl: `${BASE_URL}/accountwizard`,
    bar: "bar-indigo",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "10",
    iconColor: "#2DD4BF",
    iconBg: "rgba(45,212,191,0.15)",
    badge: "Case 360°",
    badgeColor: "bdg-teal",
    tags: [
      { label: "Support Hub", cls: "tag-green" },
      { label: "AI Powered", cls: "tag-orange" },
    ],
    title: "Case 360° View — SupportHub",
    desc: "Complete 360° case interface — health score, SLA progress, agent scorecard, and tabbed panel covering Timeline, Chatter with AI draft reply, Email, Calls, Meetings, and Audit trail.",
    bizValue:
      "Eliminates tab-switching — every case touchpoint in one compact interface, reducing resolution time.",
    meta: "LWC · Apex · AI · LWR Site",
    demoUrl: `${BASE_URL}/case360view`,
    bar: "bar-teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    num: "11",
    iconColor: "#C084FC",
    iconBg: "rgba(192,132,252,0.15)",
    badge: "Partner Portal",
    badgeColor: "bdg-plum",
    tags: [
      { label: "Self-Registration", cls: "tag-green" },
      { label: "Multi-Step Wizard", cls: "" },
    ],
    title: "Partner Self-Registration Portal",
    desc: "A premium 4-step self-registration wizard — email verification, contact details, review screen, and instant provisioning with dark split-panel layout and branded left rail.",
    bizValue:
      "Eliminates manual partner onboarding. Contact and Community User created automatically in minutes.",
    meta: "LWC · Apex · Community · LWR Site",
    demoUrl: `${BASE_URL}/selfregistration`,
    bar: "bar-plum",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "12",
    iconColor: "#FB923C",
    iconBg: "rgba(251,146,60,0.15)",
    badge: "Data Import",
    badgeColor: "bdg-orange",
    tags: [
      { label: "Field Mapping", cls: "tag-green" },
      { label: "Save Templates", cls: "" },
    ],
    title: "DataBridge Import & Mapping Engine",
    desc: "Upload CSV or Excel files, visually map source columns to Salesforce fields, and save reusable mapping templates. Supports validation, error previews, and batch import.",
    bizValue:
      "Eliminates manual data entry — teams define, save, and reuse field mappings for recurring data loads.",
    meta: "LWC · Apex · LWR Site",
    demoUrl: `${BASE_URL}/databridgeimport`,
    bar: "bar-orange",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <polyline points="7 10 10 13 17 7" />
      </svg>
    ),
  },
  {
    num: "13",
    iconColor: "#22D3EE",
    iconBg: "rgba(34,211,238,0.15)",
    badge: "CRM Dashboard",
    badgeColor: "bdg-cyan",
    tags: [
      { label: "Multi-Object", cls: "tag-green" },
      { label: "Full CRM", cls: "tag-orange" },
    ],
    title: "Salesforce CRM Dashboard",
    desc: "A complete SaaS-style CRM interface covering Accounts, Contacts, Opportunities, Leads, Reports, and Forecasting. Features KPI ribbons, live search, multi-filter toolbar, sortable columns, table/card view toggle, skeleton loading, and paginated record lists — all wired to Apex.",
    bizValue:
      "Replaces the standard Salesforce UI with a unified, modern CRM experience. Teams manage every object — pipeline, leads, contacts, and forecasts — from one cohesive interface without context-switching.",
    meta: "LWC · Apex · LWR Site",
    demoUrl: `${BASE_URL}/crm-dashboard`,
    bar: "bar-cyan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h7v3h-7zM14 19h4" />
      </svg>
    ),
  },
];

export default function Products() {
  const [loadingItem, setLoadingItem] = useState<string | null>(null);

  // ── Mouse glow ───────────────────────────────────────────
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mx", "50%");
    e.currentTarget.style.setProperty("--my", "50%");
  };

  // ── Razorpay checkout ────────────────────────────────────
  const handleBuyNow = async (productTitle: string) => {
    try {
      setLoadingItem(productTitle);

      // Step 1 — create order on server (amount is set server-side)
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productTitle }),
      });

      if (!res.ok) throw new Error("Failed to create order");

      const { orderId, amount, currency, keyId } = await res.json();

      // Step 2 — load Razorpay script if not already loaded
      if (!window.Razorpay) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Razorpay script failed"));
          document.body.appendChild(script);
        });
      }

      // Step 3 — open Razorpay checkout popup
      const options = {
        key: keyId,
        amount,
        currency,
        name: "CloudForce",
        description: productTitle,
        order_id: orderId,
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          // Step 4 — verify payment on server
          const verify = await fetch("/api/razorpay", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const result = await verify.json();

          if (result.success) {
            alert(
              `✅ Payment successful!\nPayment ID: ${response.razorpay_payment_id}\n\nYou will receive the component via email shortly.`,
            );
          } else {
            alert("❌ Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "",
          email: "",
        },
        theme: {
          color: "#D4AF6A",
        },
        modal: {
          ondismiss: () => setLoadingItem(null),
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", () => {
        alert("❌ Payment failed. Please try again.");
        setLoadingItem(null);
      });
      rzp.open();
    } catch (err) {
      console.error("Buy error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoadingItem(null);
    }
  };

  return (
    <section id="products">
      <style>{`
        .bdg-purple  { background:rgba(167,139,250,0.15); border:1px solid rgba(167,139,250,0.25); color:#A78BFA; }
        .bdg-orange  { background:rgba(251,146,60,0.15);  border:1px solid rgba(251,146,60,0.25);  color:#FB923C; }
        .bdg-cyan    { background:rgba(34,211,238,0.15);  border:1px solid rgba(34,211,238,0.25);  color:#22D3EE; }
        .bdg-emerald { background:var(--emerald-bg); border:1px solid rgba(62,207,178,0.2); color:var(--emerald); }
        .bdg-indigo  { background:rgba(129,140,248,0.15); border:1px solid rgba(129,140,248,0.25); color:#818CF8; }
        .bdg-teal    { background:rgba(45,212,191,0.15);  border:1px solid rgba(45,212,191,0.25);  color:#2DD4BF; }
        .bdg-plum    { background:rgba(192,132,252,0.15); border:1px solid rgba(192,132,252,0.25); color:#C084FC; }

        .bar-purple { background:linear-gradient(90deg,#A78BFA,#C4B5FD); }
        .bar-orange { background:linear-gradient(90deg,#FB923C,#FDBA74); }
        .bar-cyan   { background:linear-gradient(90deg,#22D3EE,#67E8F9); }
        .bar-indigo { background:linear-gradient(90deg,#818CF8,#A5B4FC); }
        .bar-teal   { background:linear-gradient(90deg,#2DD4BF,#5EEAD4); }
        .bar-plum   { background:linear-gradient(90deg,#C084FC,#D8B4FE); }

        .prod-num { font-family:'Cinzel',serif; font-size:10px; font-weight:600; letter-spacing:0.2em; color:var(--t4); margin-bottom:14px; display:block; }
        .prod-icon { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
        .prod-tags { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px; }
        .prod-tag  { font-size:10px; font-weight:500; letter-spacing:0.06em; padding:3px 10px; border-radius:100px; background:var(--bg-lift); border:1px solid var(--border2); color:var(--t3); }
        .prod-tag.tag-green  { background:var(--emerald-bg); border-color:rgba(62,207,178,0.2); color:var(--emerald); }
        .prod-tag.tag-orange { background:rgba(251,146,60,0.12); border-color:rgba(251,146,60,0.2); color:#FB923C; }
        .prod-biz  { font-size:12px; color:var(--t3); line-height:1.6; font-style:italic; margin-bottom:22px; padding-left:10px; border-left:2px solid var(--gold-border); }
        .prod-meta { font-size:11px; color:var(--t4); letter-spacing:0.06em; }

        .product-card { --mx:50%; --my:50%; }
        .product-card::before {
          content:''; position:absolute; inset:0; border-radius:24px;
          background:radial-gradient(circle at var(--mx) var(--my), rgba(212,175,106,0.08) 0%, transparent 65%);
          pointer-events:none; opacity:0; transition:opacity 0.3s;
        }
        .product-card:hover::before { opacity:1; }

        #products .products-grid { grid-template-columns:repeat(3,1fr); }
        @media(max-width:1100px){ #products .products-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:640px){  #products .products-grid { grid-template-columns:1fr; } }
      `}</style>

      <div className="sec-max">
        <div className="sec-hd">
          <div className="ey-wrap">
            <div className="ey-line" />
            <span className="ey-text">Marketplace</span>
          </div>
          <h2 className="sec-title fade-up">
            Solutions &amp; <span className="lit">Products</span>
          </h2>
          <p className="sec-sub fade-up d1">
            12 battle-tested Lightning Web Components — ready to deploy in any
            Salesforce org with documentation and integration support.
          </p>
        </div>

        <div className="products-grid">
          {products.map(
            ({
              num,
              iconColor,
              iconBg,
              badge,
              badgeColor,
              tags,
              title,
              desc,
              bizValue,
              meta,
              demoUrl,
              bar,
              icon,
            }) => (
              <div
                className="product-card fade-up"
                key={num}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`prod-bar ${bar}`} />
                <span className="prod-num">{num}</span>
                <div
                  className="prod-icon"
                  style={{ background: iconBg, color: iconColor }}
                >
                  {icon}
                </div>
                <div className="prod-top">
                  <span className={`prod-badge ${badgeColor}`}>{badge}</span>
                  <span className="prod-stars">★★★★★</span>
                </div>
                <div className="prod-tags">
                  {tags.map(({ label, cls }) => (
                    <span key={label} className={`prod-tag ${cls}`}>
                      {label}
                    </span>
                  ))}
                </div>
                <div className="prod-title">{title}</div>
                <div className="prod-desc">{desc}</div>
                <div className="prod-biz">{bizValue}</div>
                <span
                  className="prod-meta"
                  style={{ marginBottom: "16px", display: "block" }}
                >
                  {meta}
                </span>
                <div className="prod-divider" />
                <div className="prod-footer">
                  <div>
                    <div className="prod-price">
                      ₹
                      {(PRICES[title] ?? DEFAULT_PRICE).inr.toLocaleString(
                        "en-IN",
                      )}
                    </div>
                    <div className="prod-price-lbl">One-time license</div>
                  </div>
                  <div className="prod-btns">
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-demo"
                    >
                      Demo ↗
                    </a>
                    <button
                      className="btn-buy buy-gold"
                      onClick={() => handleBuyNow(title)}
                      disabled={loadingItem === title}
                      style={{
                        opacity: loadingItem === title ? 0.7 : 1,
                        cursor: loadingItem === title ? "wait" : "pointer",
                      }}
                    >
                      {loadingItem === title ? "Loading..." : "Buy Now"}
                    </button>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
