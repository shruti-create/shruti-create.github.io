import React from 'react'
import { experience } from '../data'

function groupByCompany(entries) {
  return entries.reduce((groups, exp) => {
    const last = groups[groups.length - 1]
    if (last && last.company === exp.company) {
      last.roles.push(exp)
    } else {
      groups.push({ company: exp.company, roles: [exp] })
    }
    return groups
  }, [])
}

export default function Experience() {
  const grouped = groupByCompany(experience)

  return (
    <main className="page-wrap">
      <h1 className="page-heading">Experience</h1>
      <p className="page-desc">Professional roles, research positions, and internships.</p>
      <div className="page-divider" />

      {grouped.map((group, gi) => (
        <div key={gi} className="exp-group">
          <div className="exp-company-bar">
            <span className="exp-company-name">{group.company}</span>
            <div className="exp-company-rule" />
          </div>

          {group.roles.map((role, ri) => (
            <div key={ri} className="exp-role">
              <div className="exp-role-meta">
                <div>
                  <span className="exp-role-title">{role.role}</span>
                  {role.location && (
                    <span className="exp-role-location"> &nbsp;·&nbsp; {role.location}</span>
                  )}
                </div>
                <span className="exp-period">{role.period}</span>
              </div>
              <ul className="exp-bullets">
                {role.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </main>
  )
}
