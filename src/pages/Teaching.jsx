import { useState } from 'react'
import { teaching } from '../data'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'columbia', label: 'Columbia' },
  { id: 'ucsd', label: 'UCSD' },
]

export default function Teaching() {
  const [filter, setFilter] = useState('all')

  const filtered = teaching.filter(t => {
    if (filter === 'all') return true
    if (filter === 'columbia') return t.institution.includes('Columbia')
    if (filter === 'ucsd') return t.institution.toLowerCase().includes('ucsd') || t.institution.includes('San Diego')
    return true
  })

  return (
    <div className="page-wrap">
      <div className="section-intro">
        <h2 className="page-heading">Teaching &amp; Mentorship</h2>
        <p className="page-desc">Selected instruction, tutoring, and advising roles across Columbia and UCSD.</p>
      </div>
      <div className="section-content">

      <div className="filter-bar">
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={`filter-pill${filter === f.id ? ' fp-active' : ''}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.map(t => {
        const isActive = t.period.includes('Present')
        return (
          <details key={`${t.role}-${t.institution}`} className="teaching-card accordion-entry">
            <summary className="teaching-card-summary">
              {isActive && (
                <span className="teaching-active-badge">
                  <span className="teaching-active-dot" />
                  Active
                </span>
              )}
              <span className="teaching-header">
                <span className="teaching-role">{t.role}</span>
                <span className="teaching-period">{t.period}</span>
              </span>
              <span className="teaching-inst">{t.institution}</span>
            </summary>
            <div className="teaching-card-body">
              <p className="teaching-desc">{t.description}</p>
            </div>
          </details>
        )
      })}
      </div>
    </div>
  )
}
