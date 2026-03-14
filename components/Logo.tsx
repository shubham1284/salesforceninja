interface LogoIconProps {
  size?: number;
}

/** SK icon mark — drop-in replacement for the "CF" box in Navbar */
export function LogoIcon({ size = 36 }: LogoIconProps) {
  const r = Math.round(size * 0.28);           // corner radius scales with size
  const s = size / 88;                          // scale factor vs master 88px artboard

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
        <linearGradient id="skGrad" x1="0" y1="0" x2="88" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="var(--gold,  #C9982A)" />
          <stop offset="100%" stopColor="var(--gold2, #E8C060)" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="88" height="88" rx={r * (88 / size)} fill="url(#skGrad)" />

      {/* S — top curve */}
      <path
        d="M18 26 C18 22 22 20 28 20 L46 20 C50 20 52 22 52 26 C52 30 50 32 46 33 L26 38 C22 39 20 42 20 46 C20 50 22 52 26 52 L52 52"
        stroke="white" strokeWidth="4.5" strokeLinecap="round"
      />
      {/* S — bottom curve */}
      <path
        d="M52 52 C56 52 58 55 58 59 C58 63 56 65 52 65 L26 65 C22 65 18 63 18 59"
        stroke="white" strokeWidth="4.5" strokeLinecap="round"
      />

      {/* K — spine */}
      <line x1="66" y1="20" x2="66" y2="65" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      {/* K — upper arm */}
      <path d="M66 44 L84 20" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      {/* K — lower arm */}
      <path d="M66 44 L84 65" stroke="white" strokeWidth="4.5" strokeLinecap="round" />

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
        <linearGradient id="skGradFull" x1="0" y1="0" x2="88" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="var(--gold,  #C9982A)" />
          <stop offset="100%" stopColor="var(--gold2, #E8C060)" />
        </linearGradient>
      </defs>

      {/* Icon mark */}
      <rect width="88" height="88" rx="24" fill="url(#skGradFull)" />
      <path d="M18 26 C18 22 22 20 28 20 L46 20 C50 20 52 22 52 26 C52 30 50 32 46 33 L26 38 C22 39 20 42 20 46 C20 50 22 52 26 52 L52 52"
        stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M52 52 C56 52 58 55 58 59 C58 63 56 65 52 65 L26 65 C22 65 18 63 18 59"
        stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="66" y1="20" x2="66" y2="65" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M66 44 L84 20" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M66 44 L84 65" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="76" cy="78" r="3" fill="white" opacity="0.6" />

      {/* Wordmark */}
      <text
        x="104" y="38"
        fontFamily="'Cinzel', 'Palatino Linotype', Georgia, serif"
        fontSize="32" fontWeight="700"
        letterSpacing="1.5"
        fill="var(--t1, #0F1C3F)"
      >
        Cloud
      </text>
      <text
        x="104" y="72"
        fontFamily="'Cinzel', 'Palatino Linotype', Georgia, serif"
        fontSize="32" fontWeight="700"
        letterSpacing="1.5"
        fill="var(--gold, #B8841E)"
      >
        Force
      </text>
    </svg>
  );
}

/** Default export = icon mark (used in Navbar) */
export default LogoIcon;
