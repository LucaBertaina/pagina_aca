import { Route, Routes } from 'react-router'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ScrollManager } from './components/ScrollManager'
import { EmblemSprite } from './components/ui/Emblem'
import { ContactPage } from './pages/ContactPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { GroupsPage } from './pages/GroupsPage'
import { Home } from './pages/Home'
import { NotFoundPage } from './pages/NotFoundPage'
import { ParishPage } from './pages/ParishPage'

function App() {
  return (
    <>
      <EmblemSprite />
      <ScrollManager />
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grupos" element={<GroupsPage />} />
          <Route path="/actividades" element={<ActivitiesPage />} />
          <Route path="/parroquia" element={<ParishPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
