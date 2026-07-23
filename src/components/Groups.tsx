import { landingContent } from '../data/landingContent'

export function Groups() {
  const { groups } = landingContent

  return (
    <section className="section section--muted" id="grupos">
      <div className="wrap">
        <p className="eyebrow">{groups.eyebrow}</p>
        <h2 className="section-title">{groups.title}</h2>
        <div className="card-grid">
          {groups.items.map((group) => (
            <article className="card" key={group.name}>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
