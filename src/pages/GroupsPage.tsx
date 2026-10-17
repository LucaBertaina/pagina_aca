import { Groups } from '../components/Groups'
import { Join } from '../components/Join'
import { PageHeader } from '../components/ui/PageHeader'
import { usePageTitle } from '../hooks/usePageTitle'
import { landingContent } from '../data/landingContent'

export function GroupsPage() {
  const { eyebrow, title, description } = landingContent.groups
  usePageTitle(title)

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <Groups />
      <Join />
    </>
  )
}
