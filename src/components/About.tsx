import { landingContent } from '../data/landingContent'

export function About() {
  const { about } = landingContent

  return (
    <section className="section" id="quienes-somos">
      <div className="wrap section--split">
        <div className="section__col">
          <p className="eyebrow">{about.eyebrow}</p>
          <p className="lead-para">
            <span className="drop-cap">{about.dropCapLetter}</span>
            {about.dropCapText}
          </p>
          <p>{about.paragraph2}</p>
        </div>
        <div className="section__col">
          <blockquote className="pull-quote">
            <svg className="pull-quote__mark" aria-hidden="true">
              <use href="#emblem-radiant-cross" />
            </svg>
            <p>{about.pullQuote}</p>
          </blockquote>
          <dl className="fact-row">
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
