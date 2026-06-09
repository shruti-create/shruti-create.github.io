import React, { useState } from 'react'
import { projects } from '../data'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'published', label: 'Published' },
  { id: 'working', label: 'Working Paper' },
  { id: 'review', label: 'Under Review' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'projects', label: 'Projects' },
]

export default function Research() {
  const [filter, setFilter] = useState('all')
  const show = (f) => filter === 'all' || filter === f

  return (
    <main className="page-wrap">
      <h1 className="page-heading">Research &amp; Projects</h1>
      <p className="page-desc">Publications, academic research, and selected builds.</p>
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

      {show('working') && (
        <>
        <div className="research-entry">
          <span className="research-badge-inline badge-working">Research Project</span>
          <h2 className="research-title">
            Trust-Aware Orchestration Layer (TAOL) for Agentic SWE Systems
          </h2>
          <p className="research-journal">
            Columbia University · Spring 2026
          </p>
          <p className="research-desc">
            Designing a trust-scoring orchestration framework for multi-agent AI software engineering
            systems. Each agent is assigned a dynamic trust score based on behavioral history, output
            consistency, and task success rate; the orchestration layer routes tasks and enforces
            verification checkpoints to prevent cascading failures in agentic pipelines.
          </p>
          <div className="research-tags">
            <span className="research-tag">Python</span>
            <span className="research-tag">LangChain · LangGraph</span>
            <span className="research-tag">FastAPI · React</span>
            <span className="research-tag">Multi-Agent Systems</span>
          </div>
        </div>

        <div className="research-entry">
          <span className="research-badge-inline badge-working">Working Paper</span>
          <h2 className="research-title">
            BEAD Funding Allocation Per Location: Technology, Geography, and Market Structure as Cost Drivers
          </h2>
          <p className="research-journal">
            <strong>Prof. Henning Schulzrinne</strong> · Columbia University · Spring 2026
          </p>
          <p className="research-desc">
            Analyzed what drives variation in BEAD ($42.5B federal broadband program) funding per location
            across 2,291 ISP–state project pairs using NTIA award data. Built predictive models with
            features including technology type, fiber infrastructure miles, and market concentration (HHI).
            A tuned <strong>Random Forest Regressor</strong> achieved <strong>R² = 0.79</strong> (cross-validation 0.77),
            outperforming Gradient Boosting (R² = 0.78) and linear baselines. Key finding: technology type and
            geographic build-out costs (fiber miles per location) are the dominant cost drivers, while
            market structure plays a secondary role — suggesting BEAD funding scales more with deployment
            complexity than with competitive market conditions.
          </p>
          <div className="research-tags">
            <span className="research-tag">Random Forest · Gradient Boosting</span>
            <span className="research-tag">OLS · Ridge · Lasso</span>
            <span className="research-tag">NTIA BEAD Data</span>
            <span className="research-tag">Scikit-learn · Pandas</span>
            <span className="research-tag">Broadband Policy · Telecom</span>
          </div>
        </div>
        </>
      )}

      {show('published') && (
        <div className="research-entry">
          <span className="research-badge-inline badge-pub">Published</span>
          <h2 className="research-title">
            Polymer Energy Simulations — Electron Delocalization in Conjugated Polymers
          </h2>
          <p className="research-journal">
            <strong>Journal of Physical Chemistry B</strong> · American Chemical Society · 2025 &nbsp;·&nbsp; Lipomi Lab, UCSD
          </p>
          <p className="research-desc">
            Engineered a web-based simulation tool (React / Django) to model energy changes in polymers
            caused by electron delocalization due to bends and torsion in the molecular structure.
            Rendered interactive 3D molecular models using <strong>Plotly.js</strong>, <strong>Blender</strong>,
            <strong> ChimeraX</strong>, and <strong>Three.js</strong>. Automated molecular structure data
            collection using <strong>AICD</strong> and <strong>QChem</strong> simulations and contributed
            to data analysis and figure generation for the paper.
          </p>
          <div className="research-tags">
            <span className="research-tag">React / Django</span>
            <span className="research-tag">Plotly.js · Three.js</span>
            <span className="research-tag">AICD · QChem</span>
            <span className="research-tag">Blender · ChimeraX</span>
            <span className="research-tag">Computational Chemistry</span>
          </div>
          <a
            href="https://pubs.acs.org/doi/10.1021/acs.jpcb.5c02849"
            target="_blank"
            rel="noopener noreferrer"
            className="research-link"
          >
            Read Publication →
          </a>
        </div>
      )}

      {show('review') && (
        <div className="research-entry">
          <span className="research-badge-inline badge-review">Under Review</span>
          <h2 className="research-title">
            Genomic Sequencing Visualization &amp; LAMP Primer Design Optimization
          </h2>
          <p className="research-journal">
            Boolean Lab, UCSD · Research Paper (pending PI approval)
          </p>
          <p className="research-desc">
            Created novel interactive visualization for Genomic Sequencing and Annotation using a
            <strong> React</strong> frontend and <strong>Flask</strong> backend. Simulated
            <strong> Loop Mediated Isothermal Amplification (LAMP)</strong> and integrated the LAMP
            Primer Design algorithm to evaluate and optimize primer efficacy — including mapping
            secondary structures and offering targeted recommendations to enhance primer design.
            Built a web-based editing tool for researchers to refine and adjust primers before ordering.
          </p>
          <div className="research-tags">
            <span className="research-tag">React / Flask</span>
            <span className="research-tag">LAMP Simulation</span>
            <span className="research-tag">Primer Design Algorithm</span>
            <span className="research-tag">Genomic Sequencing</span>
            <span className="research-tag">Bioinformatics</span>
          </div>
          <div style={{ marginTop: '0.8rem' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#d97706' }}>
              Presented at UCSD ERSP Poster Conference &amp; National ERSP Poster Conference (lightning talk)
            </span>
          </div>
        </div>
      )}

      {show('thesis') && (
        <div className="inner-section">
          <h2 className="inner-section-heading">ECE Honors Thesis</h2>
          <div className="research-entry" style={{ paddingTop: '1rem' }}>
            <h3 className="research-title" style={{ fontSize: '1rem' }}>
              Project 1 — RAG-Based LLM Medical Referral Triage System
            </h3>
            <p className="research-desc">
              Built a <strong>Retrieval-Augmented Generation system</strong> using Google Gemini to
              automate hospital referral triage. Ingests patient notes, retrieves relevant clinical
              guidelines via FAISS vector search, and generates structured referral recommendations
              with confidence scores. See full writeup under Projects.
            </p>
          </div>
          <div className="research-entry" style={{ paddingTop: '1rem' }}>
            <h3 className="research-title" style={{ fontSize: '1rem' }}>
              Project 2 — Infant-Caregiver Interaction Analysis
            </h3>
            <p className="research-desc">
              Designed a <strong>camera/audio-based system</strong> to analyze infant-caregiver
              interactions for learning pattern analysis — combining computer vision, audio
              processing, and behavioral modeling.
            </p>
          </div>
        </div>
      )}

      {show('projects') && (
        <div className="inner-section">
          <h2 className="inner-section-heading">Projects</h2>
          {projects.map((p, i) => (
            <div key={i} className="project-entry">
              <div className="project-top">
                <span className="project-name">{p.name}</span>
                <div className="project-tech-tags">
                  {p.tech.split(', ').map(t => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              {p.description && <p className="project-award">{p.description}</p>}
              <p className="project-desc">{p.details}</p>
              <p className="project-desc" style={{ marginTop: '0.1rem' }}>
                <strong style={{ color: 'var(--navy)' }}>Impact:</strong>{' '}{p.impact}
              </p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      )}

    </main>
  )
}
