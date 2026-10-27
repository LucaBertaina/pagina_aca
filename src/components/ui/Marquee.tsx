// Cada fila debe medir más que la pantalla más ancha (4K), si no queda un hueco al final del ciclo.
const COPIES = 6

export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {Array.from({ length: COPIES }, (_, copy) =>
        items.map((item) => (
          <li key={`${copy}-${item}`} aria-hidden={(hidden || copy > 0) || undefined}>
            {item}
            <span className="marquee__dot" aria-hidden="true" />
          </li>
        )),
      )}
    </ul>
  )

  return (
    <div className="marquee">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
