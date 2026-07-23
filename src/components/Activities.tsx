import { landingContent } from '../data/landingContent'

export function Activities() {
  const { activities } = landingContent

  return (
    <section className="section" id="actividades">
      <div className="wrap section--split">
        <div className="section__col">
          <p className="eyebrow">{activities.eyebrow}</p>
          <h2 className="section-title">{activities.title}</h2>
          <p>{activities.description}</p>
        </div>
        <div className="section__col">
          <ul className="mark-list">
            {activities.list.map((item, index) => (
              <li key={index}>
                <svg aria-hidden="true">
                  <use href="#emblem-radiant-cross" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
