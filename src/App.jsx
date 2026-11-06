import React, { useState, useEffect } from 'react'
import './App.css'
import NavBar, { SECTIONS } from './components/NavBar'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Research from './pages/Research'
import Teaching from './pages/Teaching'

const PAGES = { home: Home, education: Education, experience: Experience, research: Research, teaching: Teaching }

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleMouseMove = e => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll-spy: highlight the nav link for the section in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Old links like /#/research now scroll to the matching section
  useEffect(() => {
    const id = window.location.hash.replace(/^#\/?/, '')
    if (SECTIONS.includes(id)) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <div className="app">
      <div
        className="cursor-glow"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <NavBar active={active} />

      <div className="page-content">
        {SECTIONS.map(id => {
          const Page = PAGES[id]
          return (
            <section key={id} id={id} className="page-section">
              <Page />
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default App
