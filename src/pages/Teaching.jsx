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
    <main className="page-wrap">
      <h1 className="page-heading">Teaching &amp; Mentorship</h1>
      <p className="page-desc">Selected instruction, tutoring, and advising roles across Columbia and UCSD.</p>
      <div className="page-divider" />

      <div className="filter-bar">
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={`filter-pill${filter === f.id ? ' fp-active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.map(t => {
        const isActive = t.period.includes('Present')
        const isColumbia = t.institution.includes('Columbia')
        const accentColor = isColumbia ? 'var(--blue)' : '#C69214'

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
              <span className="teaching-inst" style={{ color: accentColor }}>{t.institution}</span>
            </summary>
            <div className="teaching-card-body">
              <p className="teaching-desc">{t.description}</p>
            </div>
          </details>
        )
      })}
    </main>
  )
}
