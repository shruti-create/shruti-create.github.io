import { projects } from '../data'

export default function Projects() {
  return (
    <main className="page-wrap">
      <h1 className="page-heading">Projects</h1>
      <p className="page-desc">Selected builds — hardware, full-stack, security, and more.</p>
      <div className="page-divider" />

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

          {p.description && (
            <p className="project-award">{p.description}</p>
          )}

          <p className="project-desc">{p.details}</p>
          <p className="project-desc" style={{ marginTop: '0.1rem' }}>
            <strong style={{ color: 'var(--navy)' }}>Impact:</strong>{' '}
            {p.impact}
          </p>

          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          )}
        </div>
      ))}
    </main>
  )
}
