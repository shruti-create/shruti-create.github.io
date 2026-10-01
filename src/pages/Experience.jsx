import { experience } from '../data'

export default function Experience() {
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
            <details className="exp-tl-card accordion-entry">
              <summary className="exp-tl-header">
                <div>
                  {i === 0 && (
                    <span className="exp-latest-badge">
                      <span className="exp-latest-dot" />
                      Most Recent
                    </span>
                  )}
                  <div className="exp-tl-company">{role.company}</div>
                  <div className="exp-tl-role">{role.role}</div>
                  {role.location && <div className="exp-tl-meta">{role.location}</div>}
                </div>
                <div className="exp-tl-period">{role.period}</div>
              </summary>
              <div className="exp-tl-body">
                <ul className="exp-tl-bullets">
                  {role.highlights.map((h, hi) => (
                    <li key={hi}>{h}</li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        ))}
      </div>
    </main>
  )
}
