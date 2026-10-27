import { Link } from 'react-router'
import { landingContent } from '../data/landingContent'
import { Emblem } from './ui/Emblem'

export function Invite() {
  const { invite } = landingContent
  const [before, after] = invite.title.split(invite.accent)

  return (
    <section className="section invite">
      <div className="invite__emblem" aria-hidden="true">
        <Emblem />
      </div>
      <div className="wrap invite__inner">
        <h2 className="invite__title">
          {before}
          <em>{invite.accent}</em>
          {after}
        </h2>
        <Link className="btn btn--gold" to="/grupos">{invite.cta}</Link>
      </div>
    </section>
  )
}
