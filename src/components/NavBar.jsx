import { NavLink } from 'react-router-dom'

const links = ['home', 'education', 'experience', 'research', 'teaching']

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-section">
          <span className="nav-eyebrow">Navigate</span>
          <div className="nav-links">
            {links.map((section, i) => (
              <NavLink
                key={section}
                to={section === 'home' ? '/' : `/${section}`}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={section === 'home'}
              >
                <span className="nav-index">{String(i + 1).padStart(2, '0')}</span>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLink>
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
