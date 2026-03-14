"use client";

import { useEffect, useState, useCallback } from "react";

const DEMO_LINK =
  "https://cube8441-dev-ed.develop.my.site.com/CodeWithShubham/account-intelligence";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#categories", label: "Categories" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#about", label: "Developer" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const saved =
      (localStorage.getItem("cf-theme") as "dark" | "light") || "dark";
    applyTheme(saved);
    setTheme(saved);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        "section[id], .why-section[id]",
      );
      let current = "home";
      sections.forEach((sec) => {
        const el = sec as HTMLElement;
        if (window.scrollY >= el.offsetTop - 100) current = el.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const applyTheme = (t: "dark" | "light") => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("cf-theme", t);
  };

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:9999;pointer-events:none;
      background:${next === "light" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"};
      animation:flash 0.4s ease forwards;
    `;
    const style = document.createElement("style");
    style.textContent = "@keyframes flash{0%{opacity:1}100%{opacity:0}}";
    document.head.appendChild(style);
    document.body.appendChild(overlay);
    setTimeout(() => {
      overlay.remove();
      style.remove();
    }, 500);
    applyTheme(next);
    setTheme(next);
  }, [theme]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <style>{`
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: var(--bg-lift);
          border: 1px solid var(--border2);
          border-radius: 10px;
          cursor: pointer;
          padding: 0;
          transition: border-color 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .hamburger:hover { border-color: var(--gold-border); }
        .hamburger span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: var(--t2);
          border-radius: 2px;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                      opacity 0.25s ease, width 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; width: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .theme-toggle-icon-only {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--bg-lift);
          border: 1px solid var(--border2);
          border-radius: 10px;
          cursor: pointer;
          font-size: 18px;
          transition: border-color 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .theme-toggle-icon-only:hover { border-color: var(--gold-border); }

        .mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 998;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .mobile-overlay.open { opacity: 1; pointer-events: all; }

        .mobile-drawer {
          display: none;
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          z-index: 999;
          background: var(--nav-bg);
          border-bottom: 1px solid var(--nav-border);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          transform: translateY(-12px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.35s cubic-bezier(0.34,1.2,0.64,1), opacity 0.3s ease;
          padding: 20px 24px 28px;
        }
        .mobile-drawer.open { transform: translateY(0); opacity: 1; pointer-events: all; }
        .mobile-drawer ul { list-style: none; display: flex; flex-direction: column; gap: 4px; margin-bottom: 20px; }
        .mobile-drawer ul li a {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 16px; border-radius: 10px;
          color: var(--t2); text-decoration: none;
          font-size: 14px; font-weight: 400; letter-spacing: 0.03em;
          transition: background 0.2s, color 0.2s;
        }
        .mobile-drawer ul li a:hover { background: var(--bg-lift); color: var(--t1); }
        .mobile-drawer ul li a.active { color: var(--gold); background: var(--gold3); font-weight: 500; }
        .mobile-drawer ul li a .nav-arrow { font-size: 12px; color: var(--t4); transition: transform 0.2s; }
        .mobile-drawer ul li a:hover .nav-arrow,
        .mobile-drawer ul li a.active .nav-arrow { transform: translateX(3px); color: var(--gold); }

        .mobile-drawer-footer {
          border-top: 1px solid var(--border);
          padding-top: 18px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .mobile-drawer-footer a {
          display: flex; align-items: center; justify-content: center;
          padding: 13px; border-radius: 12px; text-decoration: none;
          font-family: 'Cinzel', serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; transition: 0.3s;
        }
        .mobile-get-started {
          background: linear-gradient(135deg, var(--gold), var(--gold2));
          color: white !important;
          box-shadow: 0 4px 16px var(--gold-shadow);
        }
        [data-theme="light"] .mobile-get-started { color: #0F1C3F !important; }
        .mobile-get-started:hover { transform: translateY(-2px); box-shadow: 0 8px 24px var(--gold-shadow); }
        .mobile-live-demo {
          background: var(--bg-lift); border: 1px solid var(--border2);
          color: var(--t2) !important;
        }
        .mobile-live-demo:hover { background: var(--bg-surface); color: var(--t1) !important; }

        .nav-mobile-right { display: none; align-items: center; gap: 10px; }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .btn-nav-ghost { display: none !important; }
          .btn-nav-primary { display: none !important; }
          .theme-toggle { display: none !important; }
          .nav-right { display: none !important; }
          .nav-mobile-right { display: flex !important; }
          .hamburger { display: flex !important; }
          .theme-toggle-icon-only { display: flex !important; }
          .mobile-overlay { display: block; }
          .mobile-drawer { display: block; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav id="navbar">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          <div className="nav-logo-icon">CF</div>
          <span className="nav-logo-name">
            Cloud<span>Force</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="nav-links">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={
                  activeSection === href.replace("#", "") ? "active" : ""
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="toggle-icon">
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
            <div className="toggle-track">
              <div className="toggle-thumb" />
            </div>
            <span className="toggle-label">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </button>
          <a
            href={DEMO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav-ghost"
          >
            Live Demo ↗
          </a>
          <a href="#contact" className="btn-nav-primary">
            Get Started
          </a>
        </div>

        {/* Mobile right — theme icon + hamburger */}
        <div className="nav-mobile-right">
          <button
            className="theme-toggle-icon-only"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <ul>
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={
                  activeSection === href.replace("#", "") ? "active" : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
              >
                {label}
                <span className="nav-arrow">→</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer-footer">
          <a
            href={DEMO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-live-demo"
            onClick={() => setMenuOpen(false)}
          >
            Live Demo ↗
          </a>
          <a
            href="#contact"
            className="mobile-get-started"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
          >
            Get Started →
          </a>
        </div>
      </div>
    </>
  );
}
