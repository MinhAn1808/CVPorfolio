import { LayoutDashboard, Network, ServerCog, Smartphone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { skillCategories } from '../../data/skills'
import { SectionHeading } from '../common/SectionHeading'
import { TechBadge } from '../common/TechBadge'

const icons = { network: Network, server: ServerCog, layout: LayoutDashboard, smartphone: Smartphone }

export function Skills() {
  const { language, t } = useLanguage()
  const reduced = useReducedMotion()
  return (
    <section className="content-section skills-section section-shell" id="skills">
      <SectionHeading number="02" eyebrow={t.home.skillsEyebrow} title={t.home.skillsTitle} lead={t.home.skillsLead} />
      <div className="skills-grid">{skillCategories.map((category, index) => {
        const Icon = icons[category.icon as keyof typeof icons]
        return <motion.article className={`skill-card${category.supporting ? ' skill-card-supporting' : ''}`} key={category.number} initial={reduced ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }}>
          <div className="skill-card-top"><span className="skill-number">{category.number}</span><span className="skill-icon"><Icon size={18} strokeWidth={1.7} /></span>{category.supporting && <span className="supporting-label">{language === 'en' ? 'Supporting' : 'Kỹ năng hỗ trợ'}</span>}</div>
          <h3>{category.title[language]}</h3><p>{category.description[language]}</p>
          <div className="skill-tags">{category.skills.map(skill => <TechBadge key={skill} quiet>{skill}</TechBadge>)}</div>
        </motion.article>
      })}</div>
      <div className="skill-footnote"><span className="footnote-mark">i</span>{language === 'en' ? 'Skills are presented as practical foundations and focus areas, not proficiency scores.' : 'Kỹ năng được trình bày dưới dạng nền tảng và định hướng thực hành, không phải điểm đánh giá năng lực.'}</div>
    </section>
  )
}
