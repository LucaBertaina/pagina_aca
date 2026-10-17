import { landingContent } from '../data/landingContent'

export function Groups() {
  const { groups } = landingContent

  return (
    <section className="section groups" id="grupos">
      <div className="wrap">
        <ul className="index">
          {groups.items.map((group) => (
            <li key={group.name}>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
