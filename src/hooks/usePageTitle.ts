import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { landingContent } from '../data/landingContent'

const SITE = 'Acción Católica · Asunción de la Virgen'

function setTag(selector: string, create: () => HTMLElement, attr: string, value: string) {
  const el = document.head.querySelector<HTMLElement>(selector) ?? document.head.appendChild(create())
  el.setAttribute(attr, value)
}

const meta = (key: 'name' | 'property', name: string, content: string) =>
  setTag(`meta[${key}="${name}"]`, () => Object.assign(document.createElement('meta'), { [key]: name }), 'content', content)

export function usePageTitle(title?: string, { noindex = false } = {}) {
  const { pathname } = useLocation()

  useEffect(() => {
    const full = title ? `${title} · ${SITE}` : SITE
    const hint = landingContent.nav.find((n) => n.to === pathname)?.hint
    const url = `${location.origin}${pathname}`

    document.title = full
    meta('property', 'og:title', full)
    meta('property', 'og:url', url)
    setTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url)
    // Home conserva la descripción larga de index.html.
    if (pathname !== '/' && hint) {
      meta('name', 'description', hint)
      meta('property', 'og:description', hint)
    }
    meta('name', 'robots', noindex ? 'noindex' : 'index,follow')
  }, [title, pathname, noindex])
}
