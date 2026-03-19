import React from 'react'
import { teaching } from '../data'

export default function Teaching() {
  return (
    <main className="page-wrap">
      <h1 className="page-heading">Teaching &amp; Mentorship</h1>
      <p className="page-desc">Instruction, tutoring, and advising roles across Columbia and UCSD.</p>
      <div className="page-divider" />

      {teaching.map((t, i) => (
        <div key={i} className="teaching-entry">
          <div className="teaching-header">
            <span className="teaching-role">{t.role}</span>
            <span className="teaching-period">{t.period}</span>
          </div>
          <p className="teaching-inst">{t.institution}</p>
          <p className="teaching-desc">{t.description}</p>
        </div>
      ))}
    </main>
  )
}
