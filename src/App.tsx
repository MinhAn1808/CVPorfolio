import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }))
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [pathname, hash])
  return null
}

function AppFrame() {
  const { pathname } = useLocation()
  const isDetail = pathname.startsWith('/projects/')
  return (
    <div className="app-shell">
      <Navbar />
      <main><Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes></main>
      {!isDetail && <Footer />}
    </div>
  )
}

export default function App() {
  return <LanguageProvider><ScrollToTop /><AppFrame /></LanguageProvider>
}
