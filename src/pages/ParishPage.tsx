import { Parish } from '../components/Parish'
import { usePageTitle } from '../hooks/usePageTitle'

export function ParishPage() {
  usePageTitle('Nuestra parroquia')

  return <Parish />
}
