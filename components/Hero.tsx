const DEMO_LINK =
  "https://cube8441-dev-ed.develop.my.site.com/CodeWithShubham/account-intelligence";

const metrics = [
  { icon: "⚡", iconClass: "ic-g", num: "50+", label: "Solutions Delivered" },
  { icon: "✦", iconClass: "ic-s", num: "5+", label: "Years of Expertise" },
  { icon: "🏆", iconClass: "ic-e", num: "100%", label: "Production Ready" },
  { icon: "⏱", iconClass: "ic-r", num: "24H", label: "Response Time" },
];

export default function Hero() {
  return (
    <section id="home" style={{ padding: 0, background: "transparent" }}>
      <div className="hero">
        <div className="hero-inner">
          {/* Left */}
          <div>
            <div className="hero-eyebrow fade-up visible">
              <span className="pulse-dot" />
              <span className="eyebrow-text">
                Salesforce Certified Developer
              </span>
            </div>
            <h1 className="hero-h1 fade-up visible d1">
              Premium
              <br />
              <span className="h1-italic">Salesforce</span>
              <br />
              <span className="h1-accent">Solutions</span>
            </h1>
            <div className="hero-rule fade-up visible d2" />
            <p className="hero-desc fade-up visible d2">
              Production-ready Lightning Web Components, SSO integrations,
              automation tools and data utilities — crafted for enterprise
              Salesforce orgs that demand quality.
            </p>
            <div className="hero-btns fade-up visible d3">
              <a href="#products" className="btn-gold">
                Explore Solutions →
              </a>
              <a
                href={DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                ▶ View Live Demo
              </a>
            </div>
          </div>

          {/* Right — metric cards */}
          <div className="hero-right fade-up visible d4">
            {metrics.map(({ icon, iconClass, num, label }) => (
              <div className="metric-card" key={label}>
                <div className={`m-icon ${iconClass}`}>{icon}</div>
                <div>
                  <div className="m-num">{num}</div>
                  <div className="m-label">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
