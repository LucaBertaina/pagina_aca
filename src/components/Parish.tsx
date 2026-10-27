import { landingContent, type ParishData } from '../data/landingContent'
import { ParishLogo } from './ui/ParishLogo'
import youthImg from '../assets/parroquia-jovenes.webp'
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
          <h1 className="section-title">{parishName}</h1>
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
            <div className="parish__actions">
              <a className="btn btn--wine" href={info.mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
              <a className="btn btn--outline" href={`tel:${info.phoneLink}`}>Llamar</a>
            </div>
          </div>

          <div>
            <p className="parish__label">Horarios de misa</p>
            {parish.masses.length > 0 ? (
              <dl className="parish__masses">
                {parish.masses.map(({ day, times, note }) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>
                      {times.map((time) => (
                        <span key={time} className="parish__time">{time}</span>
                      ))}
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

      <div className="wrap parish__youth">
        <img
          className="parish__youth-photo"
          src={youthImg}
          width={2000}
          height={1335}
          alt="Jóvenes de la parroquia Asunción de la Virgen posando con sus banderas"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">Nuestros jóvenes</p>
          <h2 className="parish__youth-title">Una parroquia con juventud</h2>
          <p>Los jóvenes rezan, se forman y sirven juntos. Hay un lugar para vos.</p>
        </div>
      </div>
    </section>
  )
}
