"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #0a0a0f;
          --paper: #f5f3ee;
          --accent: #ff4d00;
          --accent2: #00c9a7;
          --muted: #6b6b72;
          --card: #ffffff;
          --border: #e2e0db;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1,h2,h3,h4 { font-family: 'Syne', sans-serif; line-height: 1.1; }

        /* ── NAV ── */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.2rem 5vw;
          transition: all 0.3s ease;
        }
        nav.scrolled {
          background: rgba(245,243,238,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          padding: 0.85rem 5vw;
        }
        .logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          letter-spacing: -0.03em;
          color: var(--ink);
          text-decoration: none;
          display: flex; align-items: center; gap: 0.4rem;
        }
        .logo span { color: var(--accent); }
        .logo-icon {
          width: 32px; height: 32px;
          background: var(--ink);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
        }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a {
          font-size: 0.9rem; font-weight: 500;
          color: var(--muted); text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--ink); }
        .nav-cta {
          background: var(--ink); color: #fff;
          padding: 0.55rem 1.4rem; border-radius: 100px;
          font-size: 0.88rem; font-weight: 600;
          text-decoration: none; transition: background 0.2s, transform 0.2s;
        }
        .nav-cta:hover { background: var(--accent); transform: translateY(-1px); }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          display: flex; align-items: center;
          padding: 10rem 5vw 6rem;
          position: relative; overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 60% 50% at 80% 40%, rgba(255,77,0,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 20% 70%, rgba(0,201,167,0.07) 0%, transparent 70%);
        }
        .hero-grid {
          position: absolute; inset: 0; z-index: 0; opacity: 0.04;
          background-image: linear-gradient(var(--ink) 1px, transparent 1px),
            linear-gradient(90deg, var(--ink) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .hero-content { position: relative; z-index: 1; max-width: 780px; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--ink); color: #fff;
          padding: 0.4rem 1rem; border-radius: 100px;
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.05em;
          text-transform: uppercase; margin-bottom: 2rem;
          animation: fadeUp 0.6s ease both;
        }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent2);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        .hero h1 {
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.0;
          margin-bottom: 1.5rem;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .hero h1 em {
          font-style: normal;
          color: var(--accent);
          position: relative;
        }
        .hero h1 em::after {
          content: '';
          position: absolute; left: 0; bottom: -4px; right: 0;
          height: 4px; background: var(--accent); border-radius: 2px;
          transform: scaleX(0); transform-origin: left;
          animation: underlineGrow 0.5s 0.8s ease forwards;
        }
        @keyframes underlineGrow { to { transform: scaleX(1); } }
        .hero p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--muted); max-width: 520px;
          margin-bottom: 2.5rem; font-weight: 300;
          animation: fadeUp 0.6s 0.2s ease both;
        }
        .hero-actions {
          display: flex; gap: 1rem; flex-wrap: wrap;
          animation: fadeUp 0.6s 0.3s ease both;
        }
        .btn-primary {
          background: var(--ink); color: #fff;
          padding: 0.85rem 2rem; border-radius: 100px;
          font-size: 1rem; font-weight: 600; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: all 0.2s; border: 2px solid var(--ink);
        }
        .btn-primary:hover { background: var(--accent); border-color: var(--accent); transform: translateY(-2px); }
        .btn-outline {
          background: transparent; color: var(--ink);
          padding: 0.85rem 2rem; border-radius: 100px;
          font-size: 1rem; font-weight: 600; text-decoration: none;
          border: 2px solid var(--border);
          transition: all 0.2s;
        }
        .btn-outline:hover { border-color: var(--ink); transform: translateY(-2px); }

        .hero-stats {
          display: flex; gap: 3rem; margin-top: 4rem; flex-wrap: wrap;
          animation: fadeUp 0.6s 0.4s ease both;
        }
        .stat-item { }
        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 2.2rem; font-weight: 800;
          letter-spacing: -0.04em; color: var(--ink);
        }
        .stat-num span { color: var(--accent); }
        .stat-label { font-size: 0.82rem; color: var(--muted); font-weight: 400; margin-top: 0.1rem; }

        /* floating card */
        .hero-card {
          position: absolute; right: 5vw; top: 50%;
          transform: translateY(-50%);
          background: #fff; border: 1px solid var(--border);
          border-radius: 20px; padding: 1.5rem;
          width: 260px; box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          animation: float 4s ease-in-out infinite, fadeUp 0.8s 0.5s ease both;
          display: none;
        }
        @media(min-width:1100px){ .hero-card { display: block; } }
        @keyframes float {
          0%,100% { transform: translateY(-50%) translateY(0); }
          50% { transform: translateY(-50%) translateY(-12px); }
        }
        .card-header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem; }
        .card-icon { font-size: 1.4rem; }
        .card-title { font-family:'Syne',sans-serif; font-weight:700; font-size:0.95rem; }
        .card-metric { font-size: 2rem; font-weight: 800; font-family:'Syne',sans-serif; color: var(--accent2); margin-bottom: 0.3rem; }
        .card-sub { font-size: 0.78rem; color: var(--muted); }
        .card-bar-wrap { margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
        .card-bar-row { display: flex; align-items: center; gap: 0.6rem; font-size: 0.75rem; color: var(--muted); }
        .bar { flex: 1; height: 5px; background: var(--border); border-radius: 3px; overflow: hidden; }
        .bar-fill { height: 100%; border-radius: 3px; background: var(--accent); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── SERVICES ── */
        .section { padding: 6rem 5vw; }
        .section-label {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 1rem;
        }
        .section-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 800; letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }
        .section-sub { color: var(--muted); max-width: 480px; font-weight: 300; font-size: 1.05rem; margin-bottom: 3.5rem; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .service-card {
          background: #fff; border: 1px solid var(--border);
          border-radius: 20px; padding: 2rem;
          transition: all 0.3s; position: relative; overflow: hidden;
          cursor: default;
        }
        .service-card::before {
          content: ''; position: absolute; inset: 0;
          background: var(--ink); opacity: 0;
          transition: opacity 0.3s; border-radius: 20px;
        }
        .service-card:hover::before { opacity: 1; }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.12); }
        .service-card > * { position: relative; z-index: 1; }
        .service-card:hover .service-icon,
        .service-card:hover .service-title,
        .service-card:hover .service-desc,
        .service-card:hover .service-tags span { color: #fff; border-color: rgba(255,255,255,0.2); }

        .service-icon { font-size: 2rem; margin-bottom: 1.2rem; display: block; }
        .service-title { font-family:'Syne',sans-serif; font-weight:700; font-size:1.2rem; margin-bottom:0.6rem; transition: color 0.3s; }
        .service-desc { font-size:0.9rem; color:var(--muted); line-height:1.6; margin-bottom:1.2rem; transition: color 0.3s; }
        .service-tags { display:flex; gap:0.4rem; flex-wrap:wrap; }
        .service-tags span {
          font-size:0.72rem; font-weight:600; letter-spacing:0.04em;
          padding:0.25rem 0.7rem; border-radius:100px;
          border:1px solid var(--border); color:var(--muted);
          transition: all 0.3s;
        }

        /* ── WHY US ── */
        .why-section {
          background: var(--ink); color: #fff;
          padding: 6rem 5vw; border-radius: 32px;
          margin: 0 2vw;
        }
        .why-section .section-label { color: var(--accent2); }
        .why-section .section-title { color: #fff; }
        .why-section .section-sub { color: rgba(255,255,255,0.5); }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem; margin-top: 3rem;
        }
        .why-item { padding: 1.5rem; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; }
        .why-num {
          font-family:'Syne',sans-serif; font-size:2.5rem; font-weight:800;
          color: var(--accent); letter-spacing:-0.04em; margin-bottom:0.5rem;
        }
        .why-title { font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; margin-bottom:0.4rem; }
        .why-desc { font-size:0.88rem; color:rgba(255,255,255,0.45); line-height:1.6; }

        /* ── PROCESS ── */
        .process-list { display:flex; flex-direction:column; gap:0; margin-top:3rem; }
        .process-item {
          display:flex; gap:2rem; align-items:flex-start;
          padding:2rem 0; border-bottom:1px solid var(--border);
          position:relative;
        }
        .process-item:last-child { border-bottom: none; }
        .process-num {
          font-family:'Syne',sans-serif; font-size:3.5rem; font-weight:800;
          color:var(--border); letter-spacing:-0.05em; line-height:1;
          min-width:80px;
        }
        .process-body {}
        .process-title { font-family:'Syne',sans-serif; font-weight:700; font-size:1.3rem; margin-bottom:0.4rem; }
        .process-desc { color:var(--muted); font-size:0.95rem; font-weight:300; }

        /* ── CTA ── */
        .cta-section {
          padding: 6rem 5vw;
          text-align: center;
        }
        .cta-inner {
          background: var(--accent); border-radius: 32px;
          padding: 5rem 2rem; position: relative; overflow: hidden;
        }
        .cta-inner::before {
          content:'';position:absolute;inset:0;
          background: radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 60%);
        }
        .cta-inner > * { position:relative; z-index:1; }
        .cta-title {
          font-family:'Syne',sans-serif; font-weight:800;
          font-size:clamp(2rem,5vw,3.5rem); letter-spacing:-0.03em;
          color:#fff; margin-bottom:1rem;
        }
        .cta-sub { color:rgba(255,255,255,0.75); font-size:1.1rem; margin-bottom:2.5rem; font-weight:300; }
        .btn-white {
          background:#fff; color:var(--accent);
          padding:0.9rem 2.2rem; border-radius:100px;
          font-size:1rem; font-weight:700; text-decoration:none;
          display:inline-flex; align-items:center; gap:0.5rem;
          transition:all 0.2s;
        }
        .btn-white:hover { transform:translateY(-2px); box-shadow:0 10px 30px rgba(0,0,0,0.15); }

        /* ── FOOTER ── */
        footer {
          padding: 3rem 5vw;
          display:flex; justify-content:space-between; align-items:center;
          border-top:1px solid var(--border); flex-wrap:wrap; gap:1rem;
        }
        .footer-copy { font-size:0.85rem; color:var(--muted); }
        .footer-links { display:flex; gap:1.5rem; }
        .footer-links a { font-size:0.85rem; color:var(--muted); text-decoration:none; transition:color 0.2s; }
        .footer-links a:hover { color:var(--ink); }

        /* mobile nav */
        @media(max-width:768px){
          .nav-links, .nav-cta { display:none; }
        }
      `}</style>

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#" className="logo">
          <div className="logo-icon">🥷</div>
          Salesforce<span>Ninja</span>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Book a Free Call →</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-dot" />
            Certified Salesforce Partner
          </div>
          <h1>
            Salesforce Solutions<br />That <em>Close Deals</em><br />Faster
          </h1>
          <p>
            We implement, customize, and optimize Salesforce so your team spends less time on admin and more time winning customers.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Book Free Consultation →</a>
            <a href="#services" className="btn-outline">View Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">50<span>+</span></div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">98<span>%</span></div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">5<span>+</span></div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Floating card */}
        <div className="hero-card">
          <div className="card-header">
            <span className="card-icon">📈</span>
            <span className="card-title">Pipeline Growth</span>
          </div>
          <div className="card-metric">+143%</div>
          <div className="card-sub">Average client pipeline increase</div>
          <div className="card-bar-wrap">
            {[["Leads", "85%"], ["Conversions", "72%"], ["Revenue", "90%"]].map(([label, w]) => (
              <div className="card-bar-row" key={label}>
                <span style={{minWidth:80}}>{label}</span>
                <div className="bar"><div className="bar-fill" style={{width:w}} /></div>
                <span>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Salesforce Services<br />Built for Growth</h2>
        <p className="section-sub">From first implementation to advanced automation — we cover everything Salesforce.</p>
        <div className="services-grid">
          {[
            { icon: "⚡", title: "Implementation", desc: "Full Salesforce setup from scratch. CRM configured to your exact sales process with clean data migration.", tags: ["Sales Cloud", "Service Cloud", "Setup"] },
            { icon: "🔗", title: "Integration", desc: "Connect Salesforce with your existing tools — ERP, marketing, billing, and more via APIs and middleware.", tags: ["API", "MuleSoft", "Zapier"] },
            { icon: "🤖", title: "Automation", desc: "Eliminate repetitive work with Flows, Process Builder, and Einstein AI that works while your team sleeps.", tags: ["Flow", "Einstein", "AI"] },
            { icon: "🎨", title: "Customization", desc: "Custom objects, Lightning components, and Apex code that makes Salesforce feel built just for you.", tags: ["Apex", "LWC", "Custom Objects"] },
            { icon: "📊", title: "Analytics & Reports", desc: "Dashboards and reports that give leadership real-time visibility into pipeline, performance, and revenue.", tags: ["Dashboards", "CRM Analytics", "Reports"] },
            { icon: "🛡️", title: "Support & Training", desc: "Ongoing managed support, health checks, and hands-on training so your team gets the most from Salesforce.", tags: ["Training", "Managed Support", "Audit"] },
          ].map(s => (
            <div className="service-card" key={s.title}>
              <span className="service-icon">{s.icon}</span>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why">
        <div className="why-section">
          <div className="section-label">Why Salesforce Ninja</div>
          <h2 className="section-title">We Don't Just Implement.<br />We Make It Work.</h2>
          <p className="section-sub">Most Salesforce projects fail because of poor adoption. We fix that from day one.</p>
          <div className="why-grid">
            {[
              { num: "01", title: "Certified Experts", desc: "Every consultant on our team holds active Salesforce certifications across clouds." },
              { num: "02", title: "Fast Delivery", desc: "Our agile sprint model gets you live in weeks, not months." },
              { num: "03", title: "Business-First", desc: "We understand your sales process first, then configure Salesforce around it." },
              { num: "04", title: "Post-Go-Live Support", desc: "We stay with you after launch — training, fixes, and ongoing improvements." },
            ].map(w => (
              <div className="why-item" key={w.num}>
                <div className="why-num">{w.num}</div>
                <div className="why-title">{w.title}</div>
                <div className="why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">Simple Process,<br />Powerful Results</h2>
        <p className="section-sub">We follow a proven delivery framework that keeps projects on time and on budget.</p>
        <div className="process-list">
          {[
            { title: "Discovery Call", desc: "We learn your business, sales process, and Salesforce goals in a free 30-minute call." },
            { title: "Solution Design", desc: "Our team maps out the ideal Salesforce architecture and presents a clear proposal." },
            { title: "Build & Configure", desc: "Agile sprints with weekly demos so you see progress and give feedback throughout." },
            { title: "Train & Launch", desc: "Hands-on training for your team and a smooth go-live with zero disruption." },
            { title: "Optimize & Grow", desc: "Ongoing support, new features, and quarterly reviews to keep Salesforce evolving with you." },
          ].map((p, i) => (
            <div className="process-item" key={p.title}>
              <div className="process-num">0{i + 1}</div>
              <div className="process-body">
                <div className="process-title">{p.title}</div>
                <div className="process-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <div className="cta-title">Ready to Become a<br />Salesforce Ninja?</div>
          <div className="cta-sub">Book a free 30-minute consultation. No pressure, just clarity.</div>
          <a href="mailto:hello@salesforceninja.dev" className="btn-white">
            📩 hello@salesforceninja.dev
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-copy">© 2026 SalesforceNinja.dev — All rights reserved.</div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}
