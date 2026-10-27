import { Link } from 'react-router'
import { landingContent } from '../data/landingContent'
import { SectionHeader } from './ui/SectionHeader'
import joinImg from '../assets/amistad.webp'

export function Join() {
  const { join, contact: { info } } = landingContent

  return (
    <section className="section join" id="sumate">
      <div className="wrap join__layout">
        <SectionHeader eyebrow={join.eyebrow} title={join.title} tone="light" />
        <img
          className="join__photo"
          src={joinImg}
          width={1200}
          height={1600}
          alt="Dos jóvenes de la parroquia con remeras de Acción Católica frente al santuario"
          loading="lazy"
        />
        <ol className="steps">
          {join.steps.map((step) => (
            <li key={step.num}>
              <span className="steps__num" aria-hidden="true">{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="join__cta">
          <p>¿Dudas? Escribinos.</p>
          <div className="join__actions">
            <a className="btn btn--gold" href={info.whatsappUrl} target="_blank" rel="noopener noreferrer">Escribinos por WhatsApp</a>
            <Link className="btn btn--ghost-light" to="/contacto">Otros canales</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
