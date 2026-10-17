import { landingContent } from '../data/landingContent'
import { SectionHeader } from './ui/SectionHeader'

export function Groups() {
  const { groups } = landingContent

  return (
    <section className="section groups" id="grupos">
      <div className="wrap">
        <SectionHeader eyebrow={groups.eyebrow} title={groups.title} />
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
