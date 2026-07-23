import { landingContent } from '../data/landingContent'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <a className="brand brand--footer" href="#top">
          <svg className="brand__mark" aria-hidden="true">
            <use href="#emblem-radiant-cross" />
          </svg>
          <span className="brand__word">Acción Católica</span>
        </a>
        <nav className="footer-nav">
          <a href="#quienes-somos">Quiénes somos</a>
          <a href="#grupos">Grupos</a>
          <a href="#actividades">Actividades</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <p className="footer-fine">
          © <span id="year">{currentYear}</span> {landingContent.parishName}. Acción Católica.
        </p>
      </div>
    </footer>
  )
}
