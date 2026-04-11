import { useState } from 'react'
import { experience } from '../data'

export default function Experience() {
  const [expanded, setExpanded] = useState({})
  const toggle = (i) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <main className="page-wrap">
      <h1 className="page-heading">Experience</h1>
      <p className="page-desc">Professional roles, research positions, and internships.</p>
      <div className="page-divider" />

      <div className="exp-timeline">
        {experience.map((role, i) => (
          <div key={i} className="exp-tl-item">
            <div
              className="exp-tl-dot"
              style={{ background: role.color || 'var(--blue)' }}
            />
            <div className="exp-tl-card">
              <div className="exp-tl-accent" style={{ background: role.color || 'var(--blue)' }} />
              <div className="exp-tl-body">
                {i === 0 && (
                  <div className="exp-latest-badge">
                    <span className="exp-latest-dot" />
                    Most Recent
                  </div>
                )}
                <div className="exp-tl-header">
                  <div>
                    <div className="exp-tl-company">{role.company}</div>
                    <div className="exp-tl-role">{role.role}</div>
                    {role.location && <div className="exp-tl-meta">{role.location}</div>}
                  </div>
                  <div className="exp-tl-period">{role.period}</div>
                </div>
                <ul className="exp-tl-bullets">
                  {(expanded[i] ? role.highlights : role.highlights.slice(0, 1)).map((h, hi) => (
                    <li key={hi}>{h}</li>
                  ))}
                </ul>
              </div>
              {role.highlights.length > 1 && (
                <button className="exp-tl-expand" onClick={() => toggle(i)}>
                  {expanded[i]
                    ? '↑ Show less'
                    : `▾ ${role.highlights.length - 1} more detail${role.highlights.length - 1 > 1 ? 's' : ''}`}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
