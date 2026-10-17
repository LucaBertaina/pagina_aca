import { Link } from 'react-router'
import { landingContent } from '../data/landingContent'

export function Invite() {
  const { invite } = landingContent

  return (
    <section className="section invite">
      <div className="wrap invite__inner">
        <div>
          <p className="eyebrow">{invite.eyebrow}</p>
          <h2 className="invite__title">{invite.title}</h2>
        </div>
        <div>
          <p>{invite.description}</p>
          <Link className="btn btn--wine" to="/grupos">{invite.cta}</Link>
        </div>
      </div>
    </section>
  )
}
