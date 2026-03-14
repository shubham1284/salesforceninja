const categories = [
  {
    icon: "⚡",
    num: "01 / LWC",
    title: "Lightning Web Components",
    desc: "Custom LWC for modern Salesforce UI experiences",
    delay: "d1",
  },
  {
    icon: "🔐",
    num: "02 / SSO",
    title: "SSO Integrations",
    desc: "Single Sign-On for seamless authentication workflows",
    delay: "d2",
  },
  {
    icon: "⚙️",
    num: "03 / AUTO",
    title: "Salesforce Automation",
    desc: "Flows, triggers, and automated business processes",
    delay: "d3",
  },
  {
    icon: "📊",
    num: "04 / DATA",
    title: "Data Tools",
    desc: "Migration, transformation and data utility solutions",
    delay: "d4",
  },
  {
    icon: "🎨",
    num: "05 / UI",
    title: "UI Enhancements",
    desc: "Custom themes, layouts and interface improvements",
    delay: "d5",
  },
];

export default function Categories() {
  return (
    <section id="categories">
      <div className="sec-max">
        <div className="sec-hd center">
          <div className="ey-wrap">
            <div className="ey-line" />
            <span className="ey-text">Browse</span>
            <div className="ey-line" />
          </div>
          <h2 className="sec-title fade-up">
            Solution <span className="lit">Categories</span>
          </h2>
          <p className="sec-sub fade-up d1">
            Every category purpose-built to solve real Salesforce challenges with clean,
            scalable architecture.
          </p>
        </div>
        <div className="cats-grid">
          {categories.map(({ icon, num, title, desc, delay }) => (
            <div className={`cat-card fade-up ${delay}`} key={num}>
              <span className="cat-icon">{icon}</span>
              <div className="cat-num">{num}</div>
              <div className="cat-title">{title}</div>
              <div className="cat-desc">{desc}</div>
              <div className="cat-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
