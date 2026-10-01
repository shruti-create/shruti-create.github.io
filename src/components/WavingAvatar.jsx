export default function WavingAvatar() {
  return (
    <div className="waving-avatar" aria-hidden="true">
      <svg viewBox="0 0 180 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="88" cy="94" r="82" fill="#E4EBF0" />
        <circle cx="88" cy="94" r="81" stroke="#D2DEE5" strokeWidth="2" />
        <circle cx="36" cy="58" r="2.5" fill="#B8924F" />
        <circle cx="148" cy="113" r="2" fill="#3E7A4C" />

        {/* Fuller waves sit behind the shoulders. */}
        <path d="M50 80c-5-18 1-37 17-46 7-4 14-5 22-4 21-2 35 9 38 32 3 15-2 24 5 38 8 15-2 26 5 39 8 16-3 30-16 30-9 0-15-5-21-9H71c-7 5-14 10-23 8-14-3-17-17-10-31 6-12-2-23 4-36 6-12 3-13 8-21Z" fill="#2D2528" />
        <path d="M47 104c-4 11 3 20-3 30-5 9-3 19 4 24m82-55c5 11-2 21 4 31 5 9 2 18-4 24" stroke="#59403B" strokeWidth="2.5" strokeLinecap="round" />

        {/* The raised arm is covered by a hoodie sleeve. */}
        <g className="avatar-wave-arm">
          <path d="M120 130c10-5 18-13 27-27l14 5c-8 20-20 37-37 45l-4-23Z" fill="#5E84A6" stroke="#426884" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M147 106c2-7 2-12 0-17l-5-8c-2-3 1-5 4-3l5 5-2-18c0-3 4-4 5-1l2 15-1-20c0-3 4-4 5-1l1 20V62c0-3 4-4 5-1l-1 19 3-11c1-3 5-2 4 1l-4 22c-1 7-4 12-7 16l-14-2Z" fill="#BC7C5D" stroke="#955944" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
          <path d="m147 104 14 5" stroke="#426884" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Rounded hood, drawstrings and pocket distinguish the blue hoodie. */}
        <path d="M51 139c2-17 16-27 38-27s36 10 38 27l5 50H46l5-50Z" fill="#5E84A6" stroke="#426884" strokeWidth="1.5" />
        <path d="M57 133c0-19 13-31 32-31s32 12 32 31c-7 10-18 16-32 16s-25-6-32-16Z" fill="#426884" />
        <path d="M69 121c4 13 11 21 20 21s16-8 20-21l4 21c-7 5-15 7-24 7s-17-2-24-7l4-21Z" fill="#5E84A6" />
        <path d="M80 103v15c0 5 4 8 9 8s9-3 9-8v-15" fill="#BC7C5D" />
        <path d="M72 120c4 9 10 14 17 14s13-5 17-14" stroke="#A9C6DA" strokeWidth="2" strokeLinecap="round" />
        <path d="M82 137v19m14-19v19" stroke="#C7DAE7" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M69 167c12 3 28 3 40 0l-4 15H73l-4-15Z" stroke="#426884" strokeWidth="1.4" strokeLinejoin="round" />

        {/* Rounded cheeks taper into a softly angled jaw. */}
        <path d="M89 48c17 0 30 13 30 30 0 11-5 19-14 25l-11 5c-3 2-7 2-10 0l-11-5C64 97 59 89 59 78c0-17 13-30 30-30Z" fill="#BC7C5D" stroke="#955944" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M72 72c4-2 9-2 13 0m8 0c4-2 9-2 13 0" stroke="#34292B" strokeWidth="1.6" strokeLinecap="round" />
        <g transform="translate(0 1.5)">
          <ellipse cx="78" cy="81" rx="6.3" ry="6.7" fill="#FFF5ED" />
          <ellipse cx="100" cy="81" rx="6.3" ry="6.7" fill="#FFF5ED" />
          <circle cx="78.6" cy="80" r="5.7" fill="#34292B" />
          <circle cx="100.6" cy="80" r="5.7" fill="#34292B" />
          <circle cx="81" cy="76.8" r="1.4" fill="white" />
          <circle cx="103" cy="76.8" r="1.4" fill="white" />
          <circle cx="78.6" cy="77.6" r="1.1" fill="white" />
          <circle cx="100.6" cy="77.6" r="1.1" fill="white" />
          <path d="M72 78c2-5 9-6 12-1m10 0c3-5 10-4 12 1M73 76l-3-2m4 1-1-3m31 3 1-3m0 4 3-2" stroke="#34292B" strokeWidth="1.3" strokeLinecap="round" />
        </g>
        <path d="m89 86-1 4h2" stroke="#955944" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M82 95c4 5 10 5 14 0" stroke="#873F41" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="70" cy="92" rx="4" ry="2.5" fill="#D89582" opacity=".65" />
        <ellipse cx="108" cy="92" rx="4" ry="2.5" fill="#D89582" opacity=".65" />
        <circle cx="118" cy="86" r="1.5" fill="#D9C4A0" />

        {/* A connected hairline makes one smooth swoop on each side. */}
        <path d="M53 75C50 49 63 31 89 31s39 18 36 44c-16-2-27-8-34-15-1-1-3-1-4 0-7 7-18 13-34 15Z" fill="#2D2528" />
        <path d="M84 39c-5 11-13 19-22 24m32-24c5 11 13 19 22 24" stroke="#59403B" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M63 55c-9 12-9 27-6 39-7 11-5 20-10 29-7 14-4 30 6 35 10-2 17-13 15-25 6-10 2-21 4-30-5-18-1-35-9-48Zm52 0c9 12 9 27 6 39 7 11 5 20 10 29 7 14 4 30-6 35-10-2-17-13-15-25-6-10-2-21-4-30 5-18 1-35 9-48Z" fill="#352A2C" />
        <path d="M57 91c5 9-2 19 2 29 4 9-2 18-4 27m66-56c-5 9 2 19-2 29-4 9 2 18 4 27" stroke="#624741" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}
