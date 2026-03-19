import React from 'react'
import { leadership, skills } from '../data'

const columbiaCoursework = [
  'Advanced Algorithms', 'Operating Systems', 'Compilers', 'Databases',
  'Statistical NLP', 'Machine Learning', 'Software Engineering'
]

const ucsCoursework = [
  'Data Structures & Algorithms', 'Machine Learning', 'AI: Search & Reasoning',
  'Software Engineering', 'Computer Architecture', 'Operating Systems',
  'Statistical NLP', 'Compilers', 'Databases'
]

export default function Education() {
  return (
    <main className="page-wrap">
      <h1 className="page-heading">Education</h1>
      <p className="page-desc">Degrees, honors, leadership, and technical skills.</p>
      <div className="page-divider" />

      <div className="edu-entries">

        <div className="edu-entry-page" style={{ paddingTop: 0 }}>
          <div className="edu-page-header">
            <span className="edu-page-school">Columbia University</span>
            <span className="edu-page-date">Expected December 2026</span>
          </div>
          <p className="edu-page-degree">
            <strong>Master of Science</strong> · Computer Science: Software Systems Specialization
          </p>
          <p className="edu-page-notes">New York, NY</p>
          <div className="coursework-block">
            <span className="coursework-label">Coursework</span>
            <div className="coursework-pills">
              {columbiaCoursework.map(c => <span key={c} className="coursework-pill">{c}</span>)}
            </div>
          </div>
        </div>

        <div className="edu-entry-page">
          <div className="edu-page-header">
            <span className="edu-page-school">University of California, San Diego</span>
            <span className="edu-page-date">September 2022 – June 2025</span>
          </div>
          <p className="edu-page-degree">
            <strong>Bachelor of Science</strong> · Computer Engineering: <strong>ECE Honors with Distinction</strong>
          </p>
          <p className="edu-page-degree">
            <strong>Bachelor of Arts</strong> · Individual Studies: Artificial Intelligence
          </p>
          <p className="edu-page-degree">
            Minor in Cognitive Science &nbsp;·&nbsp; <strong>NAE Grand Challenges Scholar</strong> &nbsp;·&nbsp; <strong>IEEE Eta Kappa Nu</strong>
          </p>
          <p className="edu-page-notes">La Jolla, CA</p>
          <div className="coursework-block">
            <span className="coursework-label">Coursework</span>
            <div className="coursework-pills">
              {ucsCoursework.map(c => <span key={c} className="coursework-pill">{c}</span>)}
            </div>
          </div>
        </div>

      </div>

      <div className="inner-section">
        <h2 className="inner-section-heading">Honors &amp; Recognition</h2>
        <div className="honors-two-col">
          <div className="honor-row">
            <span className="honor-accent">★</span>
            <span><strong>ECE Honors Thesis</strong> — RAG system for hospital triaging &amp; camera/audio infant-caregiver analysis</span>
          </div>
          <div className="honor-row">
            <span className="honor-accent">★</span>
            <span><strong>IEEE Eta Kappa Nu</strong> Engineering Honors Society</span>
          </div>
          <div className="honor-row">
            <span className="honor-accent">★</span>
            <span><strong>NAE Global Changemaker Scholar</strong> — Grand Challenges Scholars Program</span>
          </div>
          <div className="honor-row">
            <span className="honor-accent">★</span>
            <span><strong>Army Educational Outreach Program (AEOP)</strong> Research Grant · 2023</span>
          </div>
          <div className="honor-row">
            <span className="honor-accent">★</span>
            <span><strong>1st Place</strong> — UCSD Product Engineering Showcase (Solder Buddy, Spring 2024)</span>
          </div>
          <div className="honor-row">
            <span className="honor-accent">★</span>
            <span><strong>1st Place</strong> — IEEE Quarterly Project (Digital Puppet, Winter 2023)</span>
          </div>
        </div>
      </div>

      <div className="inner-section">
        <h2 className="inner-section-heading">Leadership</h2>
        {leadership.map((l, i) => (
          <div key={i} className="lead-entry">
            <div className="lead-header">
              <span className="lead-title">{l.title} &nbsp;—&nbsp; {l.org}</span>
              <span className="lead-period">{l.period}</span>
            </div>
            <p className="lead-desc">{l.achievements}</p>
          </div>
        ))}
      </div>

      <div className="inner-section">
        <h2 className="inner-section-heading">Technical Skills</h2>
        <div className="skills-section-page">
          <div className="skill-block">
            <div className="skill-block-label">Languages</div>
            <div className="skill-pill-row">
              {skills.languages.map(s => <span key={s} className="skill-pill-sm">{s}</span>)}
            </div>
          </div>
          <div className="skill-block">
            <div className="skill-block-label">Frameworks &amp; Tools</div>
            <div className="skill-pill-row">
              {skills.frameworks.map(s => <span key={s} className="skill-pill-sm">{s}</span>)}
            </div>
          </div>
          <div className="skill-block">
            <div className="skill-block-label">ML / Data Science</div>
            <div className="skill-pill-row">
              {skills.ml.map(s => <span key={s} className="skill-pill-sm">{s}</span>)}
            </div>
          </div>
          <div className="skill-block">
            <div className="skill-block-label">Additional Tools</div>
            <div className="skill-pill-row">
              {skills.tools.map(s => <span key={s} className="skill-pill-sm">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
