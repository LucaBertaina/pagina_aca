import { landingContent } from '../data/landingContent'

const external = { target: '_blank', rel: 'noopener noreferrer' } as const

export function Contact() {
  const { contact } = landingContent
  const { info } = contact

  const channels = [
    { label: 'Email', value: info.email, href: `mailto:${info.email}` },
    { label: 'Teléfono', value: info.phone, href: `tel:${info.phoneLink}` },
    { label: 'Instagram', value: '@pquia.asunciondelavirgen', href: info.instagram, ...external },
    { label: 'Facebook', value: 'Jóvenes de Asunción', href: info.facebook, ...external },
  ]

  return (
    <section className="section contact" id="contacto">
      <div className="wrap split">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="section-title">{contact.title}</h2>
          <p>{contact.description}</p>
        </div>

        <ul className="channels">
          {channels.map(({ label, value, ...link }) => (
            <li key={label}>
              <a {...link}>
                <span className="channels__label">{label}</span>
                <span className="channels__value">{value}</span>
                <svg className="channels__mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
