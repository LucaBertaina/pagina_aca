import { Activities } from '../components/Activities'
import { PageHeader } from '../components/ui/PageHeader'
import { usePageTitle } from '../hooks/usePageTitle'
import { landingContent } from '../data/landingContent'

export function ActivitiesPage() {
  const { eyebrow, title, description } = landingContent.activities
  usePageTitle(title)

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <Activities />
    </>
  )
}
