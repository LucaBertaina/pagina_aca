import { landingContent } from '../data/landingContent'

export function About() {
  const { about } = landingContent

  return (
    <section className="section about" id="quienes-somos">
      <div className="wrap">
        <p className="eyebrow">{about.eyebrow}</p>
        <blockquote className="about__quote">{about.pullQuote}</blockquote>

        <div className="about__body">
          <div>
            <p className="lead">
              <span className="drop-cap">{about.dropCapLetter}</span>
              {about.dropCapText}
            </p>
          </div>
          <dl className="about__facts">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
