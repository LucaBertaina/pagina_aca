import { Link } from 'react-router'
import { credits, landingContent } from '../data/landingContent'

export function Footer() {
  const { brandName, parishName, nav } = landingContent

  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="site-footer__word" aria-hidden="true">{brandName}</p>
        <div className="site-footer__inner">
          <Link className="brand" to="/">
            <span>{parishName}</span>
          </Link>
          <nav className="footer-nav" aria-label="Pie de página">
            {nav.map(({ label, short, to }) => (
              <Link key={to} to={to}>{short ?? label}</Link>
            ))}
            <Link to="/parroquia#contacto">Contacto</Link>
          </nav>
          <div className="footer-fine">
            <p>© {new Date().getFullYear()} {parishName}. {brandName}.</p>
            <p className="footer-credits">
              Desarrollado por{' '}
              {credits.map(({ name, href }, i) => (
                <span key={href}>
                  {i > 0 && ' y '}
                  <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
