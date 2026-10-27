type Props = {
  eyebrow: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="page-header">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-header__title">{title}</h1>
        {description && <p className="page-header__desc">{description}</p>}
      </div>
    </header>
  )
}
