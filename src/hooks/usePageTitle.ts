import { useEffect } from 'react'

const SITE = 'Acción Católica · Asunción de la Virgen'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : SITE
  }, [title])
}
