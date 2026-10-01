import { useState } from 'react'
import { projects } from '../data'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'accepted', label: 'Accepted' },
  { id: 'published', label: 'Published' },
  { id: 'working', label: 'Research Project' },
  { id: 'review', label: 'Under Review' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'projects', label: 'Projects' },
]

function ResearchItem({ badge, badgeClass = '', title, meta, children }) {
  return (
    <details className="research-entry accordion-entry">
      <summary className="research-summary">
        {badge && <span className={`research-badge-inline ${badgeClass}`}>{badge}</span>}
        <span className="research-title">{title}</span>
        {meta && <span className="research-journal">{meta}</span>}
      </summary>
      <div className="research-body">{children}</div>
    </details>
  )
}

function ResearchTags({ tags }) {
  return (
    <div className="research-tags">
      {tags.map(tag => <span key={tag} className="research-tag">{tag}</span>)}
    </div>
  )
}

export default function Research() {
  const [filter, setFilter] = useState('all')
  const show = category => filter === 'all' || filter === category

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

      {show('accepted') && (
        <ResearchItem
          badge="Accepted Paper"
          badgeClass="badge-accepted"
          title="Universal Internet Access at What Cost? Predicting Drivers of Funding Allocation under the Broadband Equity, Access, and Deployment (BEAD) Program"
          meta={<><strong>First author</strong> · ACM DXConf 2026 · Columbia University</>}
        >
          <p className="research-desc">
            Used BEAD final-proposal data from 49 states and Washington, DC to study why federal broadband
            funding varies by location. A tuned Random Forest explained 71.9% of the variation in average
            per-location funding among the central 95% of projects, compared with about 54% for linear
            models. Fiber miles per location and deployment technology were the strongest predictors,
            connecting engineering requirements to broadband funding policy.
          </p>
          <ResearchTags tags={['Broadband Policy', 'BEAD', 'Random Forest', 'Infrastructure Funding', 'Machine Learning']} />
          <p className="research-doi">DOI: 10.1145/3847238.3849045</p>
          <a href="https://github.com/yusunnyf/bead_funding_predictor/tree/main" target="_blank" rel="noopener noreferrer" className="research-link">
            View Research Code →
          </a>
        </ResearchItem>
      )}

      {show('working') && (
        <ResearchItem
          badge="Research Project"
          badgeClass="badge-working"
          title="Trust-Aware Orchestration Layer (TAOL) for Agentic SWE Systems"
          meta="Columbia University · Spring 2026"
        >
          <p className="research-desc">
            Designing a trust-scoring orchestration framework for multi-agent AI software engineering
            systems. Each agent is assigned a dynamic trust score based on behavioral history, output
            consistency, and task success rate; the orchestration layer routes tasks and enforces
            verification checkpoints to prevent cascading failures in agentic pipelines.
          </p>
          <ResearchTags tags={['Python', 'LangChain · LangGraph', 'FastAPI · React', 'Multi-Agent Systems']} />
        </ResearchItem>
      )}

      {show('published') && (
        <ResearchItem
          badge="Published"
          badgeClass="badge-pub"
          title="Polymer Energy Simulations — Electron Delocalization in Conjugated Polymers"
          meta={<><strong>Journal of Physical Chemistry B</strong> · American Chemical Society · 2025 · Lipomi Lab, UCSD</>}
        >
          <p className="research-desc">
            Engineered a web-based simulation tool (React / Django) to model energy changes in polymers
            caused by electron delocalization due to bends and torsion in the molecular structure.
            Rendered interactive 3D molecular models using <strong>Plotly.js</strong>, <strong>Blender</strong>,
            <strong> ChimeraX</strong>, and <strong>Three.js</strong>. Automated molecular structure data
            collection using <strong>AICD</strong> and <strong>QChem</strong> simulations and contributed
            to data analysis and figure generation for the paper.
          </p>
          <ResearchTags tags={['React / Django', 'Plotly.js · Three.js', 'AICD · QChem', 'Blender · ChimeraX', 'Computational Chemistry']} />
          <a href="https://pubs.acs.org/doi/10.1021/acs.jpcb.5c02849" target="_blank" rel="noopener noreferrer" className="research-link">
            Read Publication →
          </a>
        </ResearchItem>
      )}

      {show('review') && (
        <ResearchItem
          badge="Under Review"
          badgeClass="badge-review"
          title="Genomic Sequencing Visualization & LAMP Primer Design Optimization"
          meta="Boolean Lab, UCSD · Research Paper (pending PI approval)"
        >
          <p className="research-desc">
            Created novel interactive visualization for Genomic Sequencing and Annotation using a
            <strong> React</strong> frontend and <strong>Flask</strong> backend. Simulated
            <strong> Loop Mediated Isothermal Amplification (LAMP)</strong> and integrated the LAMP
            Primer Design algorithm to evaluate and optimize primer efficacy — including mapping
            secondary structures and offering targeted recommendations to enhance primer design.
            Built a web-based editing tool for researchers to refine and adjust primers before ordering.
          </p>
          <ResearchTags tags={['React / Flask', 'LAMP Simulation', 'Primer Design Algorithm', 'Genomic Sequencing', 'Bioinformatics']} />
          <p className="research-note">Presented at UCSD ERSP Poster Conference &amp; National ERSP Poster Conference (lightning talk)</p>
        </ResearchItem>
      )}

      {show('thesis') && (
        <section className="research-group">
          <h2 className="inner-section-heading">ECE Honors Thesis</h2>
          <ResearchItem badge="Thesis Project" title="RAG-Based LLM Medical Referral Triage System">
            <p className="research-desc">
              Built a <strong>Retrieval-Augmented Generation system</strong> using Google Gemini to
              automate hospital referral triage. Ingests patient notes, retrieves relevant clinical
              guidelines via FAISS vector search, and generates structured referral recommendations
              with confidence scores. See full writeup under Projects.
            </p>
          </ResearchItem>
          <ResearchItem badge="Thesis Project" title="Infant-Caregiver Interaction Analysis">
            <p className="research-desc">
              Designed a <strong>camera/audio-based system</strong> to analyze infant-caregiver
              interactions for learning pattern analysis — combining computer vision, audio
              processing, and behavioral modeling.
            </p>
          </ResearchItem>
        </section>
      )}

      {show('projects') && (
        <section className="research-group">
          <h2 className="inner-section-heading">Projects</h2>
          {projects.map(p => (
            <ResearchItem key={p.name} badge="Project" title={p.name} meta={p.description}>
              <div className="project-tech-tags">
                {p.tech.split(', ').map(t => <span key={t} className="project-tech-tag">{t}</span>)}
              </div>
              <p className="project-desc">{p.details}</p>
              <p className="project-desc"><strong>Impact:</strong> {p.impact}</p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project →
                </a>
              )}
            </ResearchItem>
          ))}
        </section>
      )}
    </main>
  )
}
