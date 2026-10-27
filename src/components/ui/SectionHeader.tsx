type Props = {
  eyebrow: string
  title: string
  tone?: 'default' | 'light'
}

export function SectionHeader({ eyebrow, title, tone = 'default' }: Props) {
  return (
    <header className={`section-header section-header--${tone}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </header>
  )
}
