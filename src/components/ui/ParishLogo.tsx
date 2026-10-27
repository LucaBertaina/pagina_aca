// Drop the parish logo at src/assets/parroquia-logo.svg (or .png/.webp). Renders nothing until it exists.
const found = import.meta.glob('../../assets/parroquia-logo.*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const src = Object.values(found)[0]

export function ParishLogo({ className }: { className?: string }) {
  if (!src) return null
  return <img className={className} src={src} alt="Escudo de la parroquia Asunción de la Virgen" />
}
