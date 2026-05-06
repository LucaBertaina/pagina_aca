type HeroSectionProps = {
  checkpoints: string[]
}

export function HeroSection({ checkpoints }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Asuncion de la Virgen</p>
        <h1>ACA</h1>
        <p className="lead">
          Grupo de Laicos al servicio de la Iglesia, comprometidos con la evangelización y el desarrollo integral de las personas, especialmente los jóvenes, a través de la acción católica.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#features">
            ¿Qué hacemos?
          </a>
          <a className="button button-secondary" href="#contact">
            Contáctanos
          </a>
        </div>

        <ul className="checklist" aria-label="Beneficios principales">
          {checkpoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
