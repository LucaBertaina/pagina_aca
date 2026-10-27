import { Link } from 'react-router'
import { landingContent } from '../data/landingContent'
import { Emblem } from './ui/Emblem'
import { Marquee } from './ui/Marquee'

export function Hero() {
  const { hero, pillars } = landingContent
  const [before, after] = hero.title.split(hero.accent)

  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">
            {before}
            <em>{hero.accent}</em>
            {after}
          </h1>
          <p className="hero__subtitle">
            {hero.subtitle}
          </p>
          <div className="hero__actions">
            <Link className="btn btn--wine" to="/grupos#sumate">Sumate</Link>
            <a className="btn btn--outline" href="#quienes-somos">Conocé más</a>
          </div>
        </div>

        <div className="hero__arch" aria-hidden="true">
          <Emblem className="hero__arch-emblem" />
        </div>
      </div>

      <Marquee items={pillars.items.map((p) => p.title)} />
    </section>
  )
}
