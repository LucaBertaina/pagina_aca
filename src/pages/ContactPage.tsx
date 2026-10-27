import { Contact } from '../components/Contact'
import { PageHeader } from '../components/ui/PageHeader'
import { usePageTitle } from '../hooks/usePageTitle'
import { landingContent } from '../data/landingContent'

export function ContactPage() {
  const { eyebrow, title, description } = landingContent.contact
  usePageTitle(eyebrow)

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <Contact />
    </>
  )
}
