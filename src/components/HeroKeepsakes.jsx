function ColumbiaFlag() {
  return (
    <svg className="keepsake-flag flag-columbia" viewBox="0 0 170 100" aria-hidden="true">
      <path d="M8 12L158 50 8 88Z" fill="#81B5D6" stroke="#5C91B4" strokeWidth="2" strokeLinejoin="round" />
      <text x="64" y="55" textAnchor="middle" fill="#FFF8F4" fontFamily="Space Grotesk, sans-serif" fontSize="15" fontWeight="700" letterSpacing="0.2">COLUMBIA</text>
    </svg>
  )
}

function UcsdFlag() {
  return (
    <svg className="keepsake-flag flag-ucsd" viewBox="0 0 170 100" aria-hidden="true">
      <path d="M8 12L158 50 8 88Z" fill="#183A62" stroke="#102A49" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 73q55 2 110-14l40-9L8 88Z" fill="#E8B650" />
      <text x="62" y="55" textAnchor="middle" fill="#FFF8F4" fontFamily="Space Grotesk, sans-serif" fontSize="22" fontWeight="700" letterSpacing="1">UCSD</text>
    </svg>
  )
}

function LaJollaScene() {
  return (
    <svg viewBox="0 0 160 112" role="img" aria-label="Illustration of La Jolla beach in the sun">
      <rect width="160" height="112" fill="#B6DCEB" />
      <circle cx="126" cy="24" r="16" fill="#F7D676" />
      <path d="M0 59q35-7 67 0t93-4v57H0Z" fill="#79BCCA" />
      <path d="M0 76q38-6 77 1t83-3v38H0Z" fill="#397E9F" />
      <path d="M0 51q20-8 37-3l16 10 9 20-23 8L0 75Z" fill="#BCA889" />
      <path d="M0 61q26-8 42 0l13 18-21 9L0 80Z" fill="#D5BE94" />
      <path d="M0 86q46-3 73 8t87 1v17H0Z" fill="#E9D5A8" />
      <path d="M51 83q29-5 51 0t58-1M65 91q31-4 61 1" fill="none" stroke="#F9EFE1" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 51q7-10 14-4M27 47q6-7 12-2" fill="none" stroke="#78927C" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function SanFranciscoScene() {
  const houses = [
    { x: 13, color: '#DAA9A3' },
    { x: 40, color: '#B1C7B6' },
    { x: 67, color: '#D8B99A' },
    { x: 94, color: '#AABBD0' },
  ]

  return (
    <svg viewBox="0 0 160 112" role="img" aria-label="Illustration of San Francisco's Painted Ladies">
      <rect width="160" height="112" fill="#C9DCE8" />
      <path d="M0 59h14V37h8V25h8v34h13V46h9V31h8v28h17V43h9V19h8v40h14V45h8V29h9v30h12V38h10v21h15v53H0Z" fill="#8E9FAE" opacity=".55" />
      <path d="M0 77q75-12 160-1v36H0Z" fill="#9BAE99" />
      {houses.map(({ x, color }) => (
        <g key={x}>
          <path d={`M${x} 59l12-14 12 14v48h-24Z`} fill={color} stroke="#6D7180" strokeWidth="1.2" />
          <path d={`M${x - 2} 59l14-17 14 17`} fill="none" stroke="#555F70" strokeWidth="3" strokeLinejoin="round" />
          <path d={`M${x + 7} 69h10v12h-10zM${x + 7} 87h10v12h-10z`} fill="#F7EAD6" stroke="#737887" strokeWidth="1" />
          <path d={`M${x + 3} 65h18M${x + 3} 84h18`} stroke="#F7EAD6" strokeWidth="2" />
        </g>
      ))}
      <path d="M0 104q76-12 160-2v10H0Z" fill="#687B72" />
    </svg>
  )
}

function NewYorkScene() {
  return (
    <svg viewBox="0 0 160 112" role="img" aria-label="Illustration of the New York skyline">
      <rect width="160" height="112" fill="#E6C6C6" />
      <circle cx="123" cy="26" r="16" fill="#F3CC8E" />
      <path d="M0 77h17V52h12v25h11V42h13v35h11V56h11v21h11V29h5V19h5v10h5v48h11V51h13v26h11V39h12v38h12v35H0Z" fill="#78899B" />
      <path d="M90 19V9M88 19h7" stroke="#78899B" strokeWidth="2" />
      <path d="M18 87V66h11v21M41 87V55h12v32M66 87V68h9v19M87 87V39h13v48M114 87V62h10v25M137 87V52h10v35" fill="#526B80" />
      <path d="M0 90q42-4 80 1t80-2v23H0Z" fill="#507A93" />
      <path d="M11 99q27-2 47 1m34 2q31-4 55-1" fill="none" stroke="#E9BEB1" strokeWidth="2" opacity=".8" />
      <path d="M3 84h154" stroke="#EFE0D4" strokeWidth="2" opacity=".7" />
    </svg>
  )
}

function Polaroid({ place, className, children }) {
  return (
    <div className={`keepsake-polaroid ${className}`}>
      <div className="keepsake-photo">{children}</div>
      <span className="keepsake-caption">{place}</span>
    </div>
  )
}

function Sparkles({ className }) {
  return (
    <svg className={`keepsake-sparkles ${className}`} viewBox="0 0 120 85" aria-hidden="true">
      <path d="M23 13l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill="#EBC963" />
      <path d="M91 11l3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="#D9AF4D" />
      <path d="M68 52l4 9 9 4-9 4-4 9-4-9-9-4 9-4Z" fill="#EBC963" />
      <circle cx="48" cy="12" r="3" fill="#D9AF4D" />
      <circle cx="108" cy="62" r="3.5" fill="#EBC963" />
      <circle cx="17" cy="68" r="2.5" fill="#D9AF4D" />
    </svg>
  )
}

function OpenBook() {
  return (
    <svg className="keepsake-book" viewBox="0 0 150 105" role="img" aria-label="Open book doodle">
      <ellipse cx="75" cy="92" rx="65" ry="7" fill="#AAB5BE" opacity=".2" />
      <path d="M75 82Q49 68 13 77V26q32-9 62 8Z" fill="#FFF9F5" stroke="#526B80" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M75 82q26-14 62-5V26q-32-9-62 8Z" fill="#FFF9F5" stroke="#526B80" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M75 34v48" stroke="#526B80" strokeWidth="2" />
      <path d="M23 42q22-4 41 4M23 52q22-4 41 4M23 62q22-4 41 4M86 46q18-8 40-4M86 56q18-8 40-4M86 66q18-8 40-4" fill="none" stroke="#A3B4BF" strokeWidth="2" strokeLinecap="round" />
      <path d="M111 29v29l-6-5-6 7V31" fill="#E9C06A" stroke="#B8924F" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 78q34-8 62 9 28-17 62-9" fill="none" stroke="#526B80" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function FlowerDoodle() {
  return (
    <svg className="keepsake-flower" viewBox="0 0 90 90" role="img" aria-label="Little flower doodle">
      <path d="M45 49v35M44 67q-11-10-20-5 6 12 20 11M46 70q10-11 20-7-5 12-20 13" fill="#AFC7A4" stroke="#5F8A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="45" cy="19" rx="9" ry="15" fill="#EBA6BA" stroke="#B66D83" strokeWidth="1.5" />
      <ellipse cx="45" cy="45" rx="9" ry="15" fill="#EBA6BA" stroke="#B66D83" strokeWidth="1.5" />
      <ellipse cx="32" cy="32" rx="15" ry="9" fill="#EBA6BA" stroke="#B66D83" strokeWidth="1.5" />
      <ellipse cx="58" cy="32" rx="15" ry="9" fill="#EBA6BA" stroke="#B66D83" strokeWidth="1.5" />
      <circle cx="45" cy="32" r="9" fill="#F2CE76" stroke="#C59D4E" strokeWidth="1.5" />
    </svg>
  )
}

function CowDoodle() {
  return (
    <svg className="keepsake-cow" viewBox="0 0 110 95" role="img" aria-label="Little cow doodle">
      <path d="M30 29 20 21q-9-3-10 7 2 11 19 12M80 29l10-8q9-3 10 7-2 11-19 12" fill="#3E4B56" stroke="#3E4B56" strokeWidth="2" strokeLinejoin="round" />
      <path d="M38 25q-7-16 0-18l9 15M72 25q7-16 0-18l-9 15" fill="#E8DCC9" stroke="#3E4B56" strokeWidth="2" strokeLinejoin="round" />
      <path d="M55 18q31 0 32 34 0 31-32 33-32-2-32-33 1-34 32-34Z" fill="#FFF9F5" stroke="#3E4B56" strokeWidth="2.5" />
      <path d="M31 33q10-14 23-9l-5 22q-10 7-19 0ZM78 32q-9-10-19-9l3 16q8 7 17 4Z" fill="#3E4B56" />
      <circle cx="44" cy="50" r="3" fill="#24303D" />
      <circle cx="68" cy="50" r="3" fill="#24303D" />
      <ellipse cx="55" cy="66" rx="22" ry="14" fill="#E9B9BD" stroke="#B8848D" strokeWidth="1.5" />
      <ellipse cx="47" cy="64" rx="2.5" ry="3" fill="#9C747E" />
      <ellipse cx="63" cy="64" rx="2.5" ry="3" fill="#9C747E" />
      <path d="M50 74q5 4 10 0" fill="none" stroke="#9C747E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function LeftKeepsakes() {
  return (
    <div className="hero-keepsakes hero-keepsakes-left" aria-label="UC San Diego and California keepsakes">
      <UcsdFlag />
      <Sparkles className="sparkles-left" />
      <Polaroid place="La Jolla" className="polaroid-la-jolla"><LaJollaScene /></Polaroid>
      <FlowerDoodle />
      <Polaroid place="San Francisco" className="polaroid-sf"><SanFranciscoScene /></Polaroid>
    </div>
  )
}

export function RightKeepsakes() {
  return (
    <div className="hero-keepsakes hero-keepsakes-right" aria-label="Columbia and New York keepsakes">
      <Polaroid place="New York" className="polaroid-ny"><NewYorkScene /></Polaroid>
      <ColumbiaFlag />
      <Sparkles className="sparkles-right" />
      <CowDoodle />
      <OpenBook />
    </div>
  )
}
