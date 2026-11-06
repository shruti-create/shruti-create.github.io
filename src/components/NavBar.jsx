export const SECTIONS = ['home', 'education', 'experience', 'research', 'teaching']

export default function NavBar({ active }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-profile">
          <img src="/shruti.png" alt="Shruti Bhamidipati" className="nav-photo" />
          <span className="nav-name">Shruti Bhamidipati</span>
          <span className="nav-school">Columbia University</span>
        </div>

        <div className="nav-section">
          <span className="nav-eyebrow">Navigate</span>
          <div className="nav-links">
            {SECTIONS.map((section, i) => (
              <a
                key={section}
                href={`#${section}`}
                className={active === section ? 'active' : ''}
                onClick={e => {
                  e.preventDefault()
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="nav-index">{String(i + 1).padStart(2, '0')}</span>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>

        <div className="nav-footer-links">
          <span className="nav-eyebrow">Contact</span>
          <a href="mailto:shruti.bhamidipati@gmail.com">shruti.bhamidipati@gmail.com</a>
          <a href="tel:+14088073948">+1 (408) 807-3948</a>
          <a href="https://www.linkedin.com/in/shruti-bhamidipati/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/shruti-create" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </nav>
  )
}
