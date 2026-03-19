import React from 'react'
import { skills } from '../data'

export default function Skills() {
  return (
    <main className="content-section skills-section-full">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-showcase">
        <div className="skill-category-full">
          <h3>Programming Languages</h3>
          <div className="skill-pills">{skills.languages.map(s => <div key={s} className="skill-pill">{s}</div>)}</div>
        </div>
        <div className="skill-category-full">
          <h3>Frameworks & Tools</h3>
          <div className="skill-pills">{skills.frameworks.map(s => <div key={s} className="skill-pill">{s}</div>)}</div>
        </div>
        <div className="skill-category-full">
          <h3>Machine Learning & Data Science</h3>
          <div className="skill-pills">{skills.ml.map(s => <div key={s} className="skill-pill">{s}</div>)}</div>
        </div>
        <div className="skill-category-full">
          <h3>Specialized Tools</h3>
          <div className="skill-pills">{skills.tools.map(s => <div key={s} className="skill-pill">{s}</div>)}</div>
        </div>
      </div>
    </main>
  )
}
