import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { aboutCopy, values } from '../../data/profile'
import { SectionHeading } from '../common/SectionHeading'

export function About() {
  const { language, t } = useLanguage()
  const reduced = useReducedMotion()
  return (
    <section className="content-section section-shell" id="about">
      <SectionHeading number="01" eyebrow={t.home.aboutEyebrow} title={t.home.aboutTitle} lead={t.home.aboutLead} />
      <div className="about-layout">
        <div className="about-copy">{aboutCopy.map((paragraph, index) => <motion.p key={index} initial={reduced ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>{paragraph[language]}</motion.p>)}<a className="inline-link" href="#skills">{t.home.skillsEyebrow}<ArrowUpRight size={15} /></a></div>
        <div className="value-list">{values.map(value => <article key={value.mark} className="value-item"><span className="value-mark">{value.mark}</span><div><h3>{value.title[language]}</h3><p>{value.description[language]}</p></div><span className="value-arrow"><ArrowUpRight size={16} /></span></article>)}</div>
      </div>
    </section>
  )
}
