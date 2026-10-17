import { Activities } from '../components/Activities'
import { Groups } from '../components/Groups'
import { Join } from '../components/Join'
import { PageHeader } from '../components/ui/PageHeader'
import { usePageTitle } from '../hooks/usePageTitle'

export function GroupsPage() {
  usePageTitle('Grupos y actividades')

  return (
    <>
      <PageHeader
        eyebrow="Para cada edad"
        title="Grupos y actividades"
        description="Cada grupo arma su propio camino. Acá ves cuál te corresponde y cómo empezar."
      />
      <Groups />
      <Activities />
      <Join />
    </>
  )
}
