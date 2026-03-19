import { NavLink, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const links = ['home', 'education', 'experience', 'research', 'teaching']
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo-group">
          <h1 className="logo">Shruti Bhamidipati</h1>
          <button className="cafe-nav-btn" onClick={() => navigate('/cafe')}>☕ Café</button>
        </div>
        <div className="nav-links">
          {links.map(section => (
            <NavLink
              key={section}
              to={section === 'home' ? '/' : `/${section}`}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={section === 'home'}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
