import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import CafeMiniature from './components/CafeMiniature'
import CafeTrailSVG from './components/CafeTrailSVG'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Research from './pages/Research'
import Teaching from './pages/Teaching'
import Travel from './pages/Travel'
import Cafe from './pages/Cafe'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const location = useLocation()
  const cafeMiniRef = useRef(null)
  const isOnCafe = location.pathname === '/cafe'

  useEffect(() => {
    const handleMouseMove = e => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="app">
      <div
        className="cursor-glow"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <NavBar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/cafe" element={<Cafe />} />
        </Routes>
      </div>

      <footer className="footer footer-simple">
        <div className="footer-links">
          <a href="mailto:shruti.bhamidipati@gmail.com">shruti.bhamidipati@gmail.com</a>
          <a href="tel:+14088073948">+1 (408) 807-3948</a>
          <a href="https://www.linkedin.com/in/shruti-bhamidipati/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/shruti-create" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>

      {/* Fixed café miniature — bottom right, always visible outside the café page */}
      {!isOnCafe && (
        <>
          <CafeTrailSVG miniRef={cafeMiniRef} />
          <div ref={cafeMiniRef} className="fixed-cafe-mini">
            <p className="earth-label">Shruti's Dream</p>
            <CafeMiniature size={90} />
            <p className="earth-hint">click to visit</p>
          </div>
        </>
      )}
    </div>
  )
}

export default App
