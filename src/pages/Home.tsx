import { About } from '../components/About'
import { Hero } from '../components/Hero'
import { Invite } from '../components/Invite'
import { Pillars } from '../components/Pillars'
import { usePageTitle } from '../hooks/usePageTitle'

export function Home() {
  usePageTitle()

  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <Invite />
    </>
  )
}
