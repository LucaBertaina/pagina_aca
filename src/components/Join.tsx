import { landingContent } from '../data/landingContent'

export function Join() {
  const { join } = landingContent

  return (
    <section className="section section--dark" id="sumate">
      <div className="wrap">
        <p className="eyebrow eyebrow--light">{join.eyebrow}</p>
        <h2 className="section-title section-title--light">{join.title}</h2>
        <ol className="step-list">
          {join.steps.map((step) => (
            <li key={step.num}>
              <span className="step-list__num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
