import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { education } from '../../data/profile'
import { SectionHeading } from '../common/SectionHeading'

export function Education() {
  const { language, t } = useLanguage()
  return (
    <section className="content-section education-section section-shell" id="education">
      <SectionHeading number="04" eyebrow={t.home.educationEyebrow} title={t.home.educationTitle} lead={t.home.educationLead} />
      <article className="education-entry"><div className="education-symbol"><GraduationCap size={23} strokeWidth={1.5} /></div><div className="education-main"><span className="education-kicker">{education.graduation[language]}</span><h3>{education.institution}</h3><p>{education.major[language]}</p><span className="education-direction">{education.direction[language]}<ArrowUpRight size={14} /></span></div><span className="education-year">2027</span></article>
    </section>
  )
}
