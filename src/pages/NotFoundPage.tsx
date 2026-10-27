import { Link } from 'react-router'
import { PageHeader } from '../components/ui/PageHeader'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('Página no encontrada', { noindex: true })

  return (
    <>
      <PageHeader
        eyebrow="Error 404"
        title="Esta página no existe"
        description="Puede que el enlace esté roto o que la página se haya movido."
      />
      <div className="wrap" style={{ paddingBlock: 'var(--space-section)' }}>
        <Link className="btn btn--wine" to="/">Volver al inicio</Link>
      </div>
    </>
  )
}
