export function StorySection() {
  return (
    <section className="split-section">
      <article className="story-card">
        <p className="section-label">¿Quiénes somos?</p>
        <h2>Texto relleno.</h2>
        <p>
          Poner imagenes de la ACA
        </p>
      </article>

      <article className="story-card story-card-dark" id="contact">
        <p className="section-label">Contáctanos</p>
        <h2>Escríbenos para más información.</h2>
        <p>
          Tienes dudas o quieres saber más sobre nuestros servicios? Escríbenos y te responderemos lo antes posible.
        </p>
        <a className="button button-light" href="mailto:contacto@tudominio.com">
          Contactos de la ACA
        </a>
      </article>
    </section>
  )
}
