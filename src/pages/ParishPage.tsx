import { Contact } from '../components/Contact'
import { Parish } from '../components/Parish'
import { PageHeader } from '../components/ui/PageHeader'
import { usePageTitle } from '../hooks/usePageTitle'

export function ParishPage() {
  usePageTitle('Parroquia y contacto')

  return (
    <>
      <PageHeader
        eyebrow="Dorrego, Guaymallén"
        title="Parroquia y contacto"
        description="Dónde encontrarnos, cuándo son las misas y cómo escribirnos."
      />
      <Parish />
      <Contact />
    </>
  )
}
