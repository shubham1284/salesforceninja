interface LogoIconProps {
  size?: number;
}

/** SK icon mark — drop-in replacement for the "CF" box in Navbar */
export function LogoIcon({ size = 36 }: LogoIconProps) {
  const r = Math.round(size * 0.28); // corner radius scales with size
  const s = size / 88; // scale factor vs master 88px artboard

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient
          id="skGrad"
          x1="0"
          y1="0"
          x2="88"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--gold,  #C9982A)" />
          <stop offset="100%" stopColor="var(--gold2, #E8C060)" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="88" height="88" rx={r * (88 / size)} fill="url(#skGrad)" />

      {/* S — top curve */}
      <path
        d="M18 26 C18 22 22 20 28 20 L46 20 C50 20 52 22 52 26 C52 30 50 32 46 33 L26 38 C22 39 20 42 20 46 C20 50 22 52 26 52 L52 52"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* S — bottom curve */}
      <path
        d="M52 52 C56 52 58 55 58 59 C58 63 56 65 52 65 L26 65 C22 65 18 63 18 59"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* K — spine */}
      <line
        x1="66"
        y1="20"
        x2="66"
        y2="65"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* K — upper arm */}
      <path
        d="M66 44 L84 20"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* K — lower arm */}
      <path
        d="M66 44 L84 65"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Dot accent */}
      <circle cx="76" cy="78" r="3" fill="white" opacity="0.6" />
    </svg>
  );
}

/** Full horizontal lockup — for hero / about / footer use */
export function LogoFull() {
  return (
    <svg
      width="260"
      height="88"
      viewBox="0 0 260 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="skGradFull"
          x1="0"
          y1="0"
          x2="88"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--gold,  #C9982A)" />
          <stop offset="100%" stopColor="var(--gold2, #E8C060)" />
        </linearGradient>
      </defs>

      {/* Icon mark */}
      <rect width="88" height="88" rx="24" fill="url(#skGradFull)" />
      <path
        d="M18 26 C18 22 22 20 28 20 L46 20 C50 20 52 22 52 26 C52 30 50 32 46 33 L26 38 C22 39 20 42 20 46 C20 50 22 52 26 52 L52 52"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M52 52 C56 52 58 55 58 59 C58 63 56 65 52 65 L26 65 C22 65 18 63 18 59"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <line
        x1="66"
        y1="20"
        x2="66"
        y2="65"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M66 44 L84 20"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M66 44 L84 65"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="76" cy="78" r="3" fill="white" opacity="0.6" />

      {/* Wordmark */}
      <text
        x="104"
        y="38"
        fontFamily="'Cinzel', 'Palatino Linotype', Georgia, serif"
        fontSize="32"
        fontWeight="700"
        letterSpacing="1.5"
        fill="var(--t1, #0F1C3F)"
      >
        Cloud
      </text>
      <text
        x="104"
        y="72"
        fontFamily="'Cinzel', 'Palatino Linotype', Georgia, serif"
        fontSize="32"
        fontWeight="700"
        letterSpacing="1.5"
        fill="var(--gold, #B8841E)"
      >
        Force
      </text>
    </svg>
  );
}

/**
 * LogoNavbar — full lockup for the header.
 * Uses HTML + CSS (not SVG text) so dark/light theme vars work correctly.
 * Icon is SVG, wordmark + tagline are HTML elements.
 */
export function LogoNavbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      {/* SK icon mark */}
      <svg
        width="46"
        height="46"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient
            id="navGrad"
            x1="0"
            y1="0"
            x2="52"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="var(--gold,  #C9982A)" />
            <stop offset="100%" stopColor="var(--gold2, #E8C060)" />
          </linearGradient>
        </defs>
        <rect width="52" height="52" rx="14" fill="url(#navGrad)" />
        {/* S top */}
        <path
          d="M10 15 C10 13 12 12 15 12 L26 12 C29 12 30.5 13 30.5 15 C30.5 17 29 18.5 26 19 L15 21.5 C12 22 10 24 10 26.5 C10 29 12 30.5 15 30.5 L30.5 30.5"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* S bottom */}
        <path
          d="M30.5 30.5 C33 30.5 34.5 32 34.5 34 C34.5 36 33 37.5 30.5 37.5 L15 37.5 C12 37.5 10 36 10 34"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* K spine */}
        <line
          x1="39"
          y1="12"
          x2="39"
          y2="37.5"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* K upper arm */}
        <path
          d="M39 25 L49 12"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* K lower arm */}
        <path
          d="M39 25 L49 37.5"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* dot */}
        <circle cx="46" cy="45" r="1.8" fill="white" opacity="0.55" />
      </svg>

      {/* Text block */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        {/* Cloud — uses --t1 so it flips dark/light automatically */}
        <div
          style={{
            fontFamily: "'Cinzel', 'Palatino Linotype', Georgia, serif",
            fontSize: "17px",
            fontWeight: 700,
            letterSpacing: "0.5px",
            lineHeight: 1,
            color: "var(--t1)",
          }}
        >
          Cloud
        </div>
        {/* Force — always gold */}
        <div
          style={{
            fontFamily: "'Cinzel', 'Palatino Linotype', Georgia, serif",
            fontSize: "17px",
            fontWeight: 700,
            letterSpacing: "0.5px",
            lineHeight: 1,
            color: "var(--gold)",
          }}
        >
          Force
        </div>
        {/* Tagline — full text, small, muted */}
        <div
          style={{
            fontFamily: "'DM Sans', Arial, sans-serif",
            fontSize: "7px",
            fontWeight: 400,
            letterSpacing: "1.6px",
            lineHeight: 1,
            color: "var(--t3)",
            whiteSpace: "nowrap",
            marginTop: "3px",
          }}
        >
          PREMIUM SALESFORCE SOLUTIONS
        </div>
      </div>
    </div>
  );
}

/** Default export = icon mark (used in Navbar) */
export default LogoIcon;
