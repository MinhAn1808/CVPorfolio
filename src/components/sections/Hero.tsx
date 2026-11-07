import { ArrowDownRight, ArrowRight, Circle, GitBranch, Layers3, Network, ServerCog } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { heroIntro } from '../../data/profile'
import { TechBadge } from '../common/TechBadge'

export function Hero() {
  const { language, t } = useLanguage()
  const reduced = useReducedMotion()
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <motion.div initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow hero-eyebrow"><span className="availability-dot" />{t.home.eyebrow}</motion.div>
        <motion.p className="hero-kicker" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>{t.home.heroKicker}</motion.p>
        <motion.h1 initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.55 }}>Hello, I’m<br /><span>Lê Minh An.</span></motion.h1>
        <div className="hero-role"><span className="role-rule" />{t.home.heroRole ?? 'Backend Developer | ASP.NET'}</div>
        <motion.p className="hero-intro" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>{heroIntro[language]}</motion.p>
        <p className="hero-note">{t.home.heroNote}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">{t.actions.explore}<ArrowRight size={17} /></a>
          <a className="button button-quiet" href="#contact">{t.actions.contact}<ArrowDownRight size={16} /></a>
        </div>
        <div className="hero-tech"><span>Currently working with</span>{['ASP.NET', 'REST API', 'Docker', 'ReactJS'].map(item => <TechBadge key={item}>{item}</TechBadge>)}</div>
      </div>
      <motion.div className="hero-visual" initial={reduced ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18, duration: 0.6 }} aria-label="Career focus: infrastructure foundation, ASP.NET backend, and software integration">
        <div className="visual-head"><span className="visual-label"><Circle size={8} fill="currentColor" /> ENGINEERING PATH</span><span className="visual-index">LMA — 01</span></div>
        <div className="path-stage path-foundation"><span className="stage-icon"><Network size={18} /></span><div><span className="stage-label">FOUNDATION</span><strong>Infrastructure &amp; support</strong><small>Network · Windows Server · Helpdesk</small></div><span className="stage-number">01</span></div>
        <div className="path-connector"><span /></div>
        <div className="path-stage path-backend"><span className="stage-icon"><ServerCog size={19} /></span><div><span className="stage-label">SPECIALIZATION</span><strong>Backend / ASP.NET</strong><small>REST APIs · system design</small></div><span className="stage-number">02</span></div>
        <div className="path-connector path-connector-short"><span /></div>
        <div className="path-output"><div className="output-label"><GitBranch size={15} /> PRACTICAL ENGINEERING</div><div className="output-items"><span><Layers3 size={14} /> Software</span><i /><span>Integration</span></div></div>
        <div className="visual-caption"><span>From systems context</span><span className="caption-arrow">↘</span><span>to practical software</span></div>
      </motion.div>
      <a className="hero-scroll" href="#about"><span className="scroll-line" />{t.labels.scroll}</a>
    </section>
  )
}
