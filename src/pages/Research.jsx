import React, { useState } from 'react'
import { projects } from '../data'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'published', label: 'Published' },
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
              Project 1 — RAG System for Hospital Triaging
            </h3>
            <p className="research-desc">
              Developing a <strong>Retrieval-Augmented Generation (RAG) system</strong> with
              Google's Gemini to streamline hospital triaging workflows using intelligent
              document retrieval and LLM-based reasoning.
            </p>
          </div>
          <div className="research-entry" style={{ paddingTop: '1rem' }}>
            <h3 className="research-title" style={{ fontSize: '1rem' }}>
              Project 2 — Infant-Caregiver Interaction Analysis
            </h3>
            <p className="research-desc">
              Designing a <strong>camera/audio-based system</strong> to analyze infant-caregiver
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
