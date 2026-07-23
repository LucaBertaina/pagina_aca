import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a className="brand" href="#top">
          <svg className="brand__mark" aria-hidden="true">
            <use href="#emblem-radiant-cross" />
          </svg>
          <span className="brand__word">Acción Católica</span>
        </a>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-expanded={isOpen}
          aria-controls="primaryNav"
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
          <span className="sr-only">Abrir menú</span>
        </button>

        <nav className={`primary-nav ${isOpen ? 'is-open' : ''}`} id="primaryNav">
          <a href="#quienes-somos" onClick={handleLinkClick}>Quiénes somos</a>
          <a href="#grupos" onClick={handleLinkClick}>Nuestros grupos</a>
          <a href="#actividades" onClick={handleLinkClick}>Actividades</a>
          <a href="#sumate" onClick={handleLinkClick}>Cómo sumarte</a>
          <a href="#contacto" className="primary-nav__cta" onClick={handleLinkClick}>Contacto</a>
        </nav>
      </div>
    </header>
  )
}
