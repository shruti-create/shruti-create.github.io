import { useEffect, useRef } from 'react'
import { SECTIONS } from '../sections'

export default function NavBar({ active }) {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const updateHeight = () => {
      document.documentElement.style.setProperty('--header-height', `${nav.getBoundingClientRect().height}px`)
    }
    const observer = new ResizeObserver(updateHeight)
    observer.observe(nav)
    updateHeight()

    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--header-height')
    }
  }, [])

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-container">
        <a className="nav-name" href="#home">Shruti Bhamidipati</a>

        <div className="nav-section">
          <div className="nav-links">
            {SECTIONS.map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={active === section ? 'active' : ''}
                aria-current={active === section ? 'location' : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>

        <a className="nav-contact" href="mailto:sb5197@columbia.edu">Contact</a>
      </div>
    </nav>
  )
}
