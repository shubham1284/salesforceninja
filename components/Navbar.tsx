"use client";

import { useEffect, useState, useCallback } from "react";

const WA_LINK =
  "https://api.whatsapp.com/send?phone=918983208851&text=Hi%20Shubham%2C%20I%20saw%20your%20Salesforce%20solutions%20website%20and%20I%20am%20interested%20in%20one%20of%20your%20products.";
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

  // Load saved theme on mount
  useEffect(() => {
    const saved = (localStorage.getItem("cf-theme") as "dark" | "light") || "dark";
    applyTheme(saved);
    setTheme(saved);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], .why-section[id]");
      let current = "home";
      sections.forEach((sec) => {
        const el = sec as HTMLElement;
        if (window.scrollY >= el.offsetTop - 100) {
          current = el.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const applyTheme = (t: "dark" | "light") => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("cf-theme", t);
  };

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";

    // Flash overlay
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
    setTimeout(() => { overlay.remove(); style.remove(); }, 500);

    applyTheme(next);
    setTheme(next);
  }, [theme]);

  return (
    <nav id="navbar">
      {/* Logo */}
      <a href="#home" className="nav-logo">
        <div className="nav-logo-icon">CF</div>
        <span className="nav-logo-name">
          Cloud<span>Force</span>
        </span>
      </a>

      {/* Nav links */}
      <ul className="nav-links">
        {NAV_ITEMS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={activeSection === href.replace("#", "") ? "active" : ""}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="nav-right">
        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <span className="toggle-icon">{theme === "dark" ? "🌙" : "☀️"}</span>
          <div className="toggle-track">
            <div className="toggle-thumb" />
          </div>
          <span className="toggle-label">{theme === "dark" ? "Dark" : "Light"}</span>
        </button>

        <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer" className="btn-nav-ghost">
          Live Demo ↗
        </a>
        <a href="#contact" className="btn-nav-primary">
          Get Started
        </a>
      </div>
    </nav>
  );
}
