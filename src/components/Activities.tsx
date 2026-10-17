import { landingContent } from '../data/landingContent'

export function Activities() {
  const { activities } = landingContent

  return (
    <section className="section activities" id="actividades">
      <div className="wrap bento">
        {activities.list.map((item) => (
          <div className="bento__tile" key={item}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
