import CafeMiniature from '../components/CafeMiniature'

export default function Home() {
  return (
    <main>
      <section className="hero-epic">
        <div className="hero-background">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
        </div>

        <div className="hero-two-col">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot" />
              MS CS @ Columbia · New York
            </div>

            <h1 className="hero-name">Shruti<br />Bhamidipati</h1>

            <p className="hero-blurb">
              I am fascinated by systems engineering, from the way complex technologies are structured
              to the reasoning behind the architectural decisions that shape them.
            </p>
            <p className="hero-blurb">
              I'm especially interested in how engineers design reliable, scalable systems
              to solve complex problems across domains.
            </p>
            <p className="hero-blurb">
              Outside of coding, I enjoy fitness, reading, and film, especially taking recommendations
              from friends.
            </p>
            <p className="hero-blurb">
              I also love teaching and mentoring. I hope to eventually spend the latter part of my career
              helping students learn and running a small café to foster community.
            </p>

            <div className="hero-cta">
              <a href="mailto:sb5197@columbia.edu" className="cta-primary">Get in Touch</a>
              <a href="https://www.linkedin.com/in/shruti-bhamidipati/" target="_blank" rel="noopener noreferrer" className="cta-secondary">LinkedIn</a>
              <a href="https://github.com/shruti-create" target="_blank" rel="noopener noreferrer" className="cta-secondary">GitHub</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card hc-blue">
              <div className="hc-eyebrow">Currently</div>
              <div className="hc-title">Columbia University</div>
              <div className="hc-sub">MS Computer Science · Software Systems<br />GPA 3.89 · Expected Dec 2026</div>
            </div>

            <div className="hero-card hc-green">
              <div className="hc-eyebrow">Most Recent Internship</div>
              <div className="hc-title">ServiceNow — SWE Intern</div>
              <div className="hc-sub">Santa Clara, CA · 2024 &amp; 2025<br />99.75% data processing reduction</div>
            </div>

            <div className="hero-card hc-gold">
              <div className="hc-eyebrow">Published Research</div>
              <div className="hc-title">Journal of Physical Chemistry B</div>
              <div className="hc-sub">Polymer Energy Simulations · 2025<br />Lipomi Lab, UCSD</div>
            </div>

            <div className="hero-card hc-teal">
              <div className="hc-eyebrow">Teaching</div>
              <div className="hc-title">Head TA · ML for Data Science</div>
              <div className="hc-sub">Columbia University<br />Jan 2026 – Present</div>
            </div>
          </div>
        </div>

        <div className="hero-earth">
          <p className="earth-label">Shruti's Dream</p>
          <CafeMiniature size={100} />
          <p className="earth-hint">click to visit</p>
        </div>
      </section>
    </main>
  )
}
