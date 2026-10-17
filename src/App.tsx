import { Navigate, Route, Routes } from 'react-router'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ScrollManager } from './components/ScrollManager'
import { EmblemSprite } from './components/ui/Emblem'
import { GroupsPage } from './pages/GroupsPage'
import { Home } from './pages/Home'
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
          <Route path="/parroquia" element={<ParishPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
