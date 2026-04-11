import { useState } from 'react'
import { leadership, skills } from '../data'

const columbiaCoursework = [
  'Programming Languages and Translators', 'Algorithms', 'Projects in Computer Science',
  'Topics in Software Engineering', 'Artificial Intelligence', 'UI',
  'Ethical and Responsible AI', 'Introduction to Databases', 'Professional Development & Leadership'
]

const ucsCoursework = [
  'Data Structures & Algorithms', 'Machine Learning', 'AI: Search & Reasoning',
  'Software Engineering', 'Computer Architecture', 'Operating Systems',
  'Statistical NLP', 'Compilers', 'Databases'
]

export default function Education() {
  const [cwOpen, setCwOpen] = useState({ columbia: false, ucsd: false })
  const toggleCw = (key) => setCwOpen(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <main className="page-wrap">
      <h1 className="page-heading">Education</h1>
      <p className="page-desc">Degrees, honors, leadership, and technical skills.</p>
      <div className="page-divider" />

      {/* Columbia */}
      <div className="school-card">
        <div className="school-card-accent" style={{ background: 'var(--navy)' }} />
        <div className="school-card-header">
          <div>
            <div className="school-card-name">Columbia University</div>
            <div className="school-card-location">New York, NY</div>
            <div className="school-card-period">Expected December 2026</div>
          </div>
        </div>
        <div className="school-card-body">
          <div className="school-degree-row">
            <strong>Master of Science</strong> · Computer Science: Software Systems Specialization
          </div>
          <div className="coursework-block" style={{ marginTop: '1.1rem' }}>
            <button className="cw-toggle" onClick={() => toggleCw('columbia')}>
              <span>Coursework</span>
              <span className={`cw-chevron${cwOpen.columbia ? ' open' : ''}`}>▶</span>
              <span className="cw-count">({columbiaCoursework.length})</span>
            </button>
            <div className={`cw-pills-wrap${cwOpen.columbia ? ' open' : ' closed'}`}>
              <div className="coursework-pills" style={{ marginTop: '0.6rem' }}>
                {columbiaCoursework.map(c => <span key={c} className="coursework-pill">{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UCSD */}
      <div className="school-card">
        <div className="school-card-accent" style={{ background: '#C69214' }} />
        <div className="school-card-header">
          <div>
            <div className="school-card-name">UC San Diego</div>
            <div className="school-card-location">La Jolla, CA</div>
            <div className="school-card-period">September 2022 – June 2025</div>
          </div>
        </div>
        <div className="school-card-body">
          <div className="school-degree-row">
            <strong>Bachelor of Science</strong> · Computer Engineering: <strong>ECE Honors with Distinction</strong>
          </div>
          <div className="school-degree-row">
            <strong>Bachelor of Arts</strong> · IS: Artificial Intelligence
          </div>
          <div className="school-degree-row">
            Minor in Cognitive Science &nbsp;·&nbsp; <strong>NAE Grand Challenges Scholar</strong> &nbsp;·&nbsp; <strong>IEEE Eta Kappa Nu</strong>
          </div>
          <div className="coursework-block" style={{ marginTop: '1.1rem' }}>
            <button className="cw-toggle" onClick={() => toggleCw('ucsd')}>
              <span>Coursework</span>
              <span className={`cw-chevron${cwOpen.ucsd ? ' open' : ''}`}>▶</span>
              <span className="cw-count">({ucsCoursework.length})</span>
            </button>
            <div className={`cw-pills-wrap${cwOpen.ucsd ? ' open' : ' closed'}`}>
              <div className="coursework-pills" style={{ marginTop: '0.6rem' }}>
                {ucsCoursework.map(c => <span key={c} className="coursework-pill">{c}</span>)}
              </div>
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
