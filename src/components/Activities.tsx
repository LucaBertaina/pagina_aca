import { landingContent } from '../data/landingContent'

export function Activities() {
  const { activities } = landingContent

  return (
    <section className="section activities" id="actividades">
      <div className="wrap bento">
        <div className="bento__lead">
          <p className="eyebrow">{activities.eyebrow}</p>
          <h2 className="section-title">{activities.title}</h2>
          <p>{activities.description}</p>
        </div>
        {activities.list.map((item) => (
          <div className="bento__tile" key={item}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
