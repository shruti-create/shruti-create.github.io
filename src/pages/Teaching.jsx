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
      <p className="page-desc">Instruction, tutoring, and advising roles across Columbia and UCSD.</p>
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

      {filtered.map((t, i) => {
        const isActive = t.period.includes('Present') || (t.period.includes('2026') && !t.period.includes('2025'))
        const isColumbia = t.institution.includes('Columbia')
        const accentColor = isColumbia ? 'var(--blue)' : '#C69214'

        return (
          <div key={i} className="teaching-card">
            <div className="teaching-card-accent" style={{ background: accentColor }} />
            <div className="teaching-card-body">
              {isActive && (
                <div className="teaching-active-badge">
                  <span className="teaching-active-dot" />
                  Active
                </div>
              )}
              <div className="teaching-header">
                <span className="teaching-role">{t.role}</span>
                <span className="teaching-period">{t.period}</span>
              </div>
              <p className="teaching-inst" style={{ color: accentColor }}>{t.institution}</p>
              <p className="teaching-desc">{t.description}</p>
            </div>
          </div>
        )
      })}
    </main>
  )
}
