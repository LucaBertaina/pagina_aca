import { useState, type CSSProperties } from 'react'
import { landingContent } from '../data/landingContent'
import { SectionHeader } from './ui/SectionHeader'
import oracionImg from '../assets/oracion.webp'
import formacionImg from '../assets/formacion.webp'
import accionImg from '../assets/accion.webp'
import sacrificioImg from '../assets/sacrificio.webp'

const images = [oracionImg, formacionImg, accionImg, sacrificioImg]

export function Pillars() {
  const { pillars } = landingContent
  const [active, setActive] = useState(0)
  const tracks = pillars.items.map((_, i) => (i === active ? '5fr' : '1fr')).join(' ')

  return (
    <section className="pillars" id="pilares">
      <div className="wrap">
        <SectionHeader eyebrow="Lo que nos sostiene" title={pillars.title} tone="light" />
      </div>

      <div className="wrap">
        <div className="panels" style={{ '--tracks': tracks } as CSSProperties}>
          {pillars.items.map((item, i) => {
            const isActive = active === i
            return (
              <article key={item.title} className="panel" data-active={isActive}>
                <img className="panel__img" src={images[i]} alt="" loading="eager" decoding="async" />
                <div className="panel__body" id={`pillar-${i}`} inert={!isActive}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <button
                  type="button"
                  className="panel__tab"
                  aria-expanded={isActive}
                  aria-controls={`pillar-${i}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                >
                  <span>{item.title}</span>
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
