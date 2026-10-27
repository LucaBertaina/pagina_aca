import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Scroll to the hash target on navigation, or to the top when there is none. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
