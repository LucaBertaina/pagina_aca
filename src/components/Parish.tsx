import { landingContent, type ParishData } from '../data/landingContent'
import { ParishLogo } from './ui/ParishLogo'
import parishJson from '../data/parish.json'

const parish = parishJson as ParishData

export function Parish() {
  const { parishName, contact } = landingContent
  const { info } = contact

  return (
    <section className="section parish" id="parroquia">
      <div className="wrap split">
        <div>
          <ParishLogo className="parish__logo" />
          <p className="eyebrow">Nuestra casa</p>
          <h2 className="section-title">{parishName}</h2>
          <p className="parish__intro">{parish.intro}</p>
        </div>

        <div className="parish__card">
          <div>
            <p className="parish__label">Dónde estamos</p>
            <a
              className="parish__address"
              href={info.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {info.address}
            </a>
          </div>

          <div>
            <p className="parish__label">Horarios de misa</p>
            {parish.masses.length > 0 ? (
              <dl className="parish__masses">
                {parish.masses.map(({ day, times, note }) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>
                      {times.join(' · ')}
                      {note && <small>{note}</small>}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="parish__empty">
                Los horarios cambian con el año litúrgico. Consultalos por{' '}
                <a href={`tel:${info.phoneLink}`}>teléfono</a> o en{' '}
                <a href={info.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
