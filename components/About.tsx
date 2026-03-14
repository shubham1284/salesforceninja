import LogoIcon from "./Logo";

const WA_LINK =
  "https://api.whatsapp.com/send?phone=918983208851&text=Hi%20Shubham%2C%20I%20saw%20your%20Salesforce%20solutions%20website%20and%20I%20am%20interested%20in%20one%20of%20your%20products.";

const skills = [
  "Apex",
  "LWC",
  "SSO",
  "Flows",
  "Integrations",
  "SOQL",
  "REST APIs",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "110px 5%" }}>
      <div className="about-layout">
        {/* Card */}
        <div className="about-card fade-up">
          <div
            className="about-monogram"
            style={{ background: "none", boxShadow: "none", padding: 0 }}
          >
            <LogoIcon size={80} />
          </div>
          <div className="about-name">SHUBHAM</div>
          <div className="about-role">
            Salesforce AppExchange Certified Developer
          </div>
          <div className="about-skills">
            {skills.map((s) => (
              <span className="skill-pill" key={s}>
                {s}
              </span>
            ))}
          </div>
          <div className="about-stats">
            <div className="about-stat">
              <div className="num">3+</div>
              <div className="lbl">Years</div>
            </div>
            <div className="about-stat">
              <div className="num">50+</div>
              <div className="lbl">Solutions</div>
            </div>
            <div className="about-stat">
              <div className="num">✦</div>
              <div className="lbl">Certified</div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="about-text">
          <div className="ey-wrap" style={{ marginBottom: 22 }}>
            <div className="ey-line" />
            <span className="ey-text">About the Developer</span>
          </div>
          <h2 className="sec-title fade-up" style={{ marginBottom: 28 }}>
            3+ Years of <span className="lit">Enterprise</span> Salesforce
          </h2>
          <p className="fade-up d1">
            I&apos;m a{" "}
            <strong>Salesforce AppExchange Certified Developer</strong> with 3+
            years of hands-on experience building production-grade Apex,
            Lightning Web Components, and complex Salesforce integrations for
            enterprise clients.
          </p>
          <div className="about-quote fade-up d2">
            &ldquo;Every solution I build is designed to be maintained and
            scaled by your team long after delivery — not just to demo
            well.&rdquo;
          </div>
          <p className="fade-up d3">
            My philosophy: clean architecture, secure patterns, and code your
            entire engineering team can understand. Every product here has been
            deployed in real environments and refined through genuine client
            feedback.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold fade-up d4"
            style={{ display: "inline-flex", marginTop: 32 }}
          >
            Connect with Me →
          </a>
        </div>
      </div>
    </section>
  );
}
