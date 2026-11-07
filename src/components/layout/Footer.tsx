import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'
import { useLanguage } from '../../i18n/LanguageContext'

export function Footer() {
  const { language, t } = useLanguage()
  return (
    <footer className="site-footer"><div className="footer-inner">
      <div><Link className="footer-brand" to="/">LMA<span> /</span></Link><p>{t.home.footerNote}</p></div>
      <div className="footer-links"><span>© {new Date().getFullYear()} {profile.name}</span><span>{language === 'en' ? profile.location : 'Việt Nam'}</span>
        {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>}
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>}
        <a href="#home" aria-label="Back to top"><ArrowUpRight size={16} /></a>
      </div>
    </div></footer>
  )
}
