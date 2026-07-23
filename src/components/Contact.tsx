import { landingContent } from '../data/landingContent'

export function Contact() {
  const { contact } = landingContent
  const { info } = contact

  return (
    <section className="section" id="contacto">
      <div className="wrap section--split">
        <div className="section__col">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="section-title">{contact.title}</h2>
          <p>{contact.description}</p>
          <ul className="contact-list">
            <li>
              <strong>Parroquia:</strong> {info.parishName}
            </li>
            <li>
              <strong>Dirección:</strong> {info.address}
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${info.email}`}>{info.email}</a>
            </li>
            <li>
              <strong>Teléfono:</strong>{' '}
              <a href={`tel:${info.phoneLink}`}>{info.phone}</a>
            </li>
          </ul>
        </div>
        <div className="section__col">
          <form
            className="contact-form"
            action={`mailto:${info.email}`}
            method="post"
            encType="text/plain"
          >
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" autoComplete="name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />

            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows={4} required></textarea>

            <button className="btn btn--wine" type="submit">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
