import { useEffect, useState, type CSSProperties } from 'react'
import { Link, NavLink } from 'react-router'
import { landingContent } from '../data/landingContent'
import { Emblem } from './ui/Emblem'

export function Header() {
  const { info } = landingContent.contact
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link className="brand" to="/" onClick={close}>
          <Emblem className="brand__mark" />
          <span>{landingContent.brandName}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="primaryNav"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="primary-nav" id="primaryNav" data-open={isOpen}>
          {landingContent.nav.map(({ label, to, hint }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="primary-nav__link"
              onClick={close}
              style={{ '--i': i } as CSSProperties}
            >
              <span className="primary-nav__text">
                <span className="primary-nav__label">{label}</span>
                <span className="primary-nav__hint">{hint}</span>
              </span>
              <svg className="primary-nav__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </NavLink>
          ))}
          <Link
            to="/parroquia#contacto"
            className="primary-nav__cta"
            onClick={close}
            style={{ '--i': landingContent.nav.length } as CSSProperties}
          >
            Contacto
          </Link>
          <div className="primary-nav__foot" style={{ '--i': landingContent.nav.length + 1 } as CSSProperties}>
            <a href={`tel:${info.phoneLink}`}>{info.phone}</a>
            <a href={info.instagram} target="_blank" rel="noopener noreferrer">@pquia.asunciondelavirgen</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
