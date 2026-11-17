export default function Home() {
  return (
    <div>
      <section className="hero-epic">
        <div className="hero-scene">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-identity">
                <div className="hero-hello">Hello, world! I'm Shruti.</div>
                <div className="hero-intro">
                  <h1 className="hero-name">Shruti<br /><span>Bhamidipati</span></h1>
                </div>
                <div className="hero-photo-row">
                  <div className="hero-photo-frame">
                    <img className="hero-photo" src="/shruti-latest.jpg" alt="Shruti Bhamidipati" />
                  </div>
                  <ul className="hero-focus">
                    <li>Software Systems</li>
                    <li>Tech &amp; Policy Research</li>
                    <li>Teaching &amp; Mentorship</li>
                  </ul>
                </div>
              </div>
              <div className="hero-bio">
                <div className="bio-sparkles" aria-hidden="true">
                  <span>✦</span><span>✧</span><span>✦</span>
                </div>
                <p className="hero-blurb">
                  I graduated from UC San Diego with a <strong>B.S. in Computer Engineering</strong>,
                  a <strong>B.A. in Artificial Intelligence</strong>, and a minor in Cognitive Science. I'm now pursuing an
                  <strong> M.S. in Computer Science at Columbia</strong>, specializing in Software Systems.
                </p>
                <p className="hero-blurb">
                  I'm drawn to the intersection of <strong>computer science and policy</strong>: how technical and policy
                  decisions shape who benefits from technology. As an <strong>NAE Global Changemakers Scholar</strong> in
                  UC San Diego's Global Ties program, I learned to start with the people and constraints
                  behind a technical problem. I carried that lesson into my master's research as <strong>co-first
                  author</strong> of a recently accepted paper using machine learning to study what drives funding
                  for broadband expansion under the federal <strong>BEAD program</strong>.
                </p>
                <p className="hero-blurb">
                  Outside of tech, I love meeting new people, exploring creative ideas, fitness, reading,
                  and movies. I also love <strong>teaching and mentoring</strong>. If you'd like to collaborate on a project
                  or just connect, I'd love to hear from you!
                </p>

                <div className="hero-cta">
                  <a href="mailto:sb5197@columbia.edu" className="cta-primary">Get in Touch</a>
                  <a href="https://www.linkedin.com/in/shruti-bhamidipati/" target="_blank" rel="noopener noreferrer" className="cta-secondary">LinkedIn</a>
                  <a href="https://github.com/shruti-create" target="_blank" rel="noopener noreferrer" className="cta-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
