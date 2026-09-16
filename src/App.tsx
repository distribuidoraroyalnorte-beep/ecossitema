import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Company from './pages/Company'
import Activity from './pages/Activity'
import Brands from './pages/Brands'
import Coverage from './pages/Coverage'
import BecomeClient from './pages/BecomeClient'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/atuacao" element={<Activity />} />
          <Route path="/marcas" element={<Brands />} />
          <Route path="/cobertura" element={<Coverage />} />
          <Route path="/seja-cliente" element={<BecomeClient />} />
          <Route path="/parceiros" element={<Partners />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
