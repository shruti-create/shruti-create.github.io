import WavingAvatar from '../components/WavingAvatar'
import { LeftKeepsakes, RightKeepsakes } from '../components/HeroKeepsakes'

export default function Home() {
  return (
    <main>
      <section className="hero-epic">
        <div className="hero-background">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
        </div>

        <div className="hero-scene">
          <LeftKeepsakes />
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-hello">
                <span className="hero-hello-prompt" aria-hidden="true">&gt;</span>
                Hello, world! I'm Shruti!
              </div>

              <div className="hero-intro">
                <h1 className="hero-name">Shruti<br />Bhamidipati</h1>
                <WavingAvatar />
              </div>

              <p className="hero-blurb">
                I graduated from UC San Diego with a B.S. in Computer Engineering,
                a B.A. in Artificial Intelligence, and a minor in Cognitive Science. I'm now pursuing an
                M.S. in Computer Science at Columbia, specializing in Software Systems.
              </p>
              <p className="hero-blurb">
                I'm drawn to the intersection of computer science and policy: how technical and policy
                decisions shape who benefits from technology. As an NAE Global Changemakers Scholar in
                UC San Diego's Global Ties program, I learned to start with the people and constraints
                behind a technical problem. I carried that lesson into my master's research as first
                author of a recently accepted paper using machine learning to study what drives funding
                for broadband expansion under the federal BEAD program.
              </p>
              <p className="hero-blurb">
                Outside of tech, I love meeting new people, exploring creative ideas, fitness, reading,
                and film. I also love teaching and mentoring. If you'd like to collaborate on a project
                or just connect, I'd love to hear from you!
              </p>

              <div className="hero-cta">
                <a href="mailto:sb5197@columbia.edu" className="cta-primary">Get in Touch</a>
                <a href="https://www.linkedin.com/in/shruti-bhamidipati/" target="_blank" rel="noopener noreferrer" className="cta-secondary">LinkedIn</a>
                <a href="https://github.com/shruti-create" target="_blank" rel="noopener noreferrer" className="cta-secondary">GitHub</a>
              </div>
            </div>
          </div>
          <RightKeepsakes />
        </div>

      </section>
    </main>
  )
}
