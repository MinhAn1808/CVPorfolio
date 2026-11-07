import { useEffect, useState } from 'react'
import { ArrowDownToLine, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { profile } from '../../data/profile'
import { LanguageSwitcher } from './LanguageSwitcher'

const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact']

export function Navbar() {
  const { t } = useLanguage()
  const location = useLocation()
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const onHome = location.pathname === '/'

  useEffect(() => {
    if (!onHome) { setActive(''); return }
    const nodes = sections.map(id => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node))
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-22% 0px -65% 0px', threshold: [0, 0.15, 0.35] })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [onHome, location.pathname])

  useEffect(() => { setMenuOpen(false) }, [location.pathname, location.hash])

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <Link className="brand-mark" to="/" aria-label="Lê Minh An home"><span>L</span><span>M</span><i>A</i></Link>
        <div className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
          {sections.map(id => <Link key={id} to={onHome ? `#${id}` : `/#${id}`} className={onHome && active === id ? 'nav-active' : ''} onClick={() => setMenuOpen(false)}>{t.nav[id as keyof typeof t.nav]}</Link>)}
        </div>
        <div className="nav-actions"><LanguageSwitcher />
          {profile.cvPath ? <a className="nav-cv" href={profile.cvPath} download><ArrowDownToLine size={15} />{t.actions.download}</a> : <button className="nav-cv nav-cv-disabled" type="button" disabled title={t.actions.cvMissing} aria-label={t.actions.cvMissing}><ArrowDownToLine size={15} /><span>{t.actions.download}</span></button>}
        </div>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>
    </header>
  )
}
