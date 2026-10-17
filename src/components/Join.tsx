import { Link } from 'react-router'
import { landingContent } from '../data/landingContent'
import { SectionHeader } from './ui/SectionHeader'

export function Join() {
  const { join, contact: { info } } = landingContent

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
        <div className="join__cta">
          <p>¿Dudas o ganas de empezar? Escribinos y te respondemos.</p>
          <div className="join__actions">
            <a className="btn btn--gold" href={info.whatsappUrl} target="_blank" rel="noopener noreferrer">Escribinos por WhatsApp</a>
            <Link className="btn btn--ghost-light" to="/contacto">Otros canales</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
