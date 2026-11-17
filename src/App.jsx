import React, { useState, useEffect } from 'react'
import './App.css'
import './portfolio.css'
import NavBar from './components/NavBar'
import { SECTIONS } from './sections'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Research from './pages/Research'
import Teaching from './pages/Teaching'
import { recordVisit } from './visitAnalytics'

const PAGES = { home: Home, education: Education, experience: Experience, research: Research, teaching: Teaching }

function App() {
  const [active, setActive] = useState('home')

  useEffect(() => { recordVisit() }, [])

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

  // Support links to sections, including older /#/research links.
  useEffect(() => {
    const id = window.location.hash.replace(/^#\/?/, '')
    if (SECTIONS.includes(id)) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <div className="app">
      <NavBar active={active} />
      <main className="page-content">
        {SECTIONS.map(id => {
          const Page = PAGES[id]
          return (
            <section key={id} id={id} className="page-section">
              <Page />
            </section>
          )
        })}
      </main>
     
    </div>
  )
}

export default App
