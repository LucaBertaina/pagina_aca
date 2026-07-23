import { landingContent } from '../data/landingContent'

export function Hero() {
  const { hero } = landingContent

  return (
    <section className="hero" id="top">
      <svg className="hero__watermark" aria-hidden="true">
        <use href="#emblem-radiant-cross" />
      </svg>
      <div className="wrap hero__inner">
        <p className="eyebrow eyebrow--light">{hero.eyebrow}</p>
        <h1 className="hero__title">
          Fe, comunidad<br />y servicio.
        </h1>
        <p className="hero__subtitle">
          {hero.subtitle}{' '}
          <strong>{hero.strongText}</strong>
        </p>
        <div className="hero__actions">
          <a className="btn btn--gold" href="#sumate">
            Sumate
          </a>
          <a className="btn btn--ghost" href="#quienes-somos">
            Conocé más
          </a>
        </div>
      </div>
    </section>
  )
}
