const reasons = [
  {
    num: "01 / CERTIFIED",
    icon: "🏆",
    title: "AppExchange Certified",
    text: "Built by a Salesforce AppExchange Certified Developer with verified, battle-tested enterprise expertise.",
    delay: "d1",
  },
  {
    num: "02 / QUALITY",
    icon: "🚀",
    title: "Production Ready",
    text: "Every component tested in live Salesforce environments — not developer sandboxes or demo orgs.",
    delay: "d2",
  },
  {
    num: "03 / SECURE",
    icon: "🔒",
    title: "Secure Architecture",
    text: "Secure, scalable design following Salesforce security guidelines and enterprise best practices.",
    delay: "d3",
  },
  {
    num: "04 / EASY",
    icon: "🔌",
    title: "Easy Integration",
    text: "Drop into any existing Salesforce org without rearchitecting or disrupting your current setup.",
    delay: "d1",
  },
  {
    num: "05 / CODE",
    icon: "✨",
    title: "Clean Code",
    text: "Optimized Apex and LWC — readable, maintainable, and thoroughly documented for your whole team.",
    delay: "d2",
  },
  {
    num: "06 / REAL",
    icon: "💼",
    title: "Real Use Cases",
    text: "Designed for actual business scenarios refined through years of genuine Salesforce client work.",
    delay: "d3",
  },
];

export default function WhyUs() {
  return (
    <div className="why-section" id="why">
      <div className="sec-max">
        <div className="sec-hd center">
          <div className="ey-wrap">
            <div className="ey-line" />
            <span className="ey-text">Differentiators</span>
            <div className="ey-line" />
          </div>
          <h2 className="sec-title fade-up">
            Why My <span className="lit">Solutions</span>
          </h2>
          <p className="sec-sub fade-up d1">
            Certified expertise, real production experience, and code your team can maintain
            with confidence.
          </p>
        </div>
        <div className="why-grid">
          {reasons.map(({ num, icon, title, text, delay }) => (
            <div className={`why-card fade-up ${delay}`} key={num}>
              <div className="why-num">{num}</div>
              <div className="why-icon">{icon}</div>
              <div className="why-title">{title}</div>
              <div className="why-text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
