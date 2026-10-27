import { landingContent } from '../data/landingContent'
import ninosImg from '../assets/ninos.webp'
import jovenesImg from '../assets/jovenes.webp'

const photos: Record<string, { src: string; alt: string; width: number; height: number }> = {
  Niños: {
    src: ninosImg,
    width: 2000,
    height: 1335,
    alt: 'Chicos de la parroquia en una jornada al aire libre con su bandera',
  },
  Jóvenes: {
    src: jovenesImg,
    width: 2000,
    height: 1333,
    alt: 'Grupo de jóvenes sonriendo con la bandera de Acción Católica',
  },
}

export function Groups() {
  const { groups } = landingContent

  return (
    <section className="section groups" id="grupos">
      <div className="wrap">
        <ul className="index">
          {groups.items.map((group) => {
            const photo = photos[group.name]
            return (
              <li key={group.name} className={photo ? 'index__row--photo' : undefined}>
                <h3>{group.name}</h3>
                <p>{group.description}</p>
                {photo && (
                  <div className="index__media">
                    <img loading="lazy" {...photo} />
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
