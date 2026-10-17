import { Link } from 'react-router'
import { landingContent } from '../data/landingContent'
import { SectionHeader } from './ui/SectionHeader'

export function Join() {
  const { join } = landingContent

  return (
    <section className="section join" id="sumate">
      <div className="wrap">
        <SectionHeader eyebrow={join.eyebrow} title={join.title} tone="light" />
        <ol className="steps">
          {join.steps.map((step) => (
            <li key={step.num}>
              <span className="steps__num" aria-hidden="true">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <Link className="btn btn--gold" to="/parroquia#contacto">Escribinos</Link>
      </div>
    </section>
  )
}
