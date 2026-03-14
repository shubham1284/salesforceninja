const DEMO_LINK =
  "https://cube8441-dev-ed.develop.my.site.com/CodeWithShubham/account-intelligence";

const products = [
  {
    bar: "bar-gold",
    badge: "bdg-gold",
    badgeLabel: "LWC Component",
    buyClass: "buy-gold",
    featClass: "fi-g",
    title: "Account Intelligence Dashboard",
    desc: "360° account view with real-time KPIs, activity timeline, and predictive sales insights for enterprise teams.",
    features: [
      "Real-time data visualization",
      "Apex-powered backend",
      "Fully mobile responsive",
    ],
    price: "$149",
    delay: "d1",
  },
  {
    bar: "bar-sapphire",
    badge: "bdg-sapphire",
    badgeLabel: "SSO Integration",
    buyClass: "buy-sapphire",
    featClass: "fi-s",
    title: "OAuth 2.0 SSO Kit",
    desc: "Complete Single Sign-On with Google, Azure AD, and Okta support. Secure, scalable, production-tested.",
    features: [
      "Multi-provider support",
      "Secure session management",
      "PKCE flow ready",
    ],
    price: "$299",
    delay: "d2",
  },
  {
    bar: "bar-emerald",
    badge: "bdg-emerald",
    badgeLabel: "Automation",
    buyClass: "buy-emerald",
    featClass: "fi-e",
    title: "Smart Flow Builder",
    desc: "Visual automation toolkit with 20+ pre-built flow templates for common Salesforce workflow patterns.",
    features: [
      "20+ flow templates",
      "Built-in error handling",
      "Bulk-safe operations",
    ],
    price: "$199",
    delay: "d3",
  },
];

export default function Products() {
  return (
    <section id="products">
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
            Battle-tested and ready to deploy. Each solution ships with documentation and
            integration support.
          </p>
        </div>
        <div className="products-grid">
          {products.map(
            ({ bar, badge, badgeLabel, buyClass, featClass, title, desc, features, price, delay }) => (
              <div className={`product-card fade-up ${delay}`} key={title}>
                <div className={`prod-bar ${bar}`} />
                <div className="prod-top">
                  <span className={`prod-badge ${badge}`}>{badgeLabel}</span>
                  <span className="prod-stars">★★★★★</span>
                </div>
                <div className="prod-title">{title}</div>
                <div className="prod-desc">{desc}</div>
                <ul className="prod-features">
                  {features.map((f) => (
                    <li key={f}>
                      <span className={`feat-icon ${featClass}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="prod-divider" />
                <div className="prod-footer">
                  <div>
                    <div className="prod-price">{price}</div>
                    <div className="prod-price-lbl">One-time license</div>
                  </div>
                  <div className="prod-btns">
                    <a
                      href={DEMO_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-demo"
                    >
                      Demo ↗
                    </a>
                    <button className={`btn-buy ${buyClass}`}>Buy Now</button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
