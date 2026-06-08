import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function CafeTrailSVG({ miniRef }) {
  const [pd, setPd] = useState(null)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) { setPd(null); return }

    const compute = () => {
      const btn = document.querySelector('.cafe-nav-btn')
      const mini = miniRef?.current
      if (!btn || !mini) return

      const bR = btn.getBoundingClientRect()
      const mR = mini.getBoundingClientRect()

      const sx = bR.left + bR.width / 2
      const sy = bR.bottom + 6
      const ex = mR.left + mR.width / 2
      const ey = mR.top - 6

      // True S-curve: both tangents are horizontal
      //   CP1 at (ex, sy)  → start departs going hard RIGHT (same y as start)
      //   CP2 at (sx, ey)  → end arrives going hard RIGHT (same y as end, from the left)
      // This makes the middle section drop nearly straight down.
      const cp1x = ex
      const cp1y = sy
      const cp2x = sx
      const cp2y = ey

      const d = `M ${sx} ${sy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${ex} ${ey}`
      setPd({ d, w: window.innerWidth, h: window.innerHeight })
    }

    const t = setTimeout(compute, 220)
    window.addEventListener('resize', compute)
    return () => { clearTimeout(t); window.removeEventListener('resize', compute) }
  }, [miniRef, isHome])

  if (!isHome || !pd) return null

  return (
    <svg
      style={{
        position: 'fixed', top: 0, left: 0,
        width: pd.w, height: pd.h,
        pointerEvents: 'none',
        zIndex: 2,           /* behind navbar + hero cards, above base background */
        overflow: 'visible',
      }}
    >
      {/* Soft glow halo */}
      <path d={pd.d} fill="none" stroke="#B44040" strokeWidth="7"
        strokeDasharray="12 9" strokeLinecap="round" opacity="0.05" />
      {/* Main dashed road */}
      <path id="cafe-trail-path" d={pd.d} fill="none" stroke="#B44040"
        strokeWidth="2.5" strokeDasharray="12 9" strokeLinecap="round" opacity="0.32" />
      {/* Animated traveller dot moving toward the café */}
      <circle r="4" fill="#B44040" opacity="0.72">
        <animateMotion dur="7s" repeatCount="indefinite">
          <mpath href="#cafe-trail-path" />
        </animateMotion>
      </circle>
    </svg>
  )
}
