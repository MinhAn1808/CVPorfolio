import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Language, Project } from '../../types'
import { useLanguage } from '../../i18n/LanguageContext'
import { TechBadge } from './TechBadge'
import { ProjectImage } from './ProjectImage'

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const { language, t } = useLanguage()
  const reduced = useReducedMotion()
  const text = (value: { en: string; vi: string }) => value[language as Language]
  return (
    <motion.article className={`project-card${compact ? ' project-card-compact' : ''}`} whileHover={reduced ? undefined : { y: -4 }} transition={{ duration: 0.2 }}>
      <ProjectImage project={project} />
      <div className="project-card-content">
        <div className="project-card-top"><span className="project-index">{project.index} / 03</span><span className="project-type">{text(project.type)}</span></div>
        <div className="project-card-title"><h3>{text(project.title)}</h3><span className="project-orbit" aria-hidden="true"><span /></span></div>
        <p className="project-summary">{text(project.overview)}</p>
        <div className="project-highlight"><span>{t.labels.highlights}</span><strong>{text(project.highlights[0])}</strong></div>
        {!compact && <div className="project-meta"><div><span>{t.labels.role}</span><strong>{text(project.role)}</strong></div><div><span>{t.labels.team}</span><strong>{text(project.team)}</strong></div><div><span>{t.labels.status}</span><strong>{text(project.status)}</strong></div></div>}
        <div className="tech-list">{project.technologies.slice(0, compact ? 3 : 4).map(item => <TechBadge key={item} quiet>{item}</TechBadge>)}</div>
        <Link className="text-link project-link" to={`/projects/${project.slug}`}><span>{t.actions.viewCase}</span><ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" /></Link>
      </div>
    </motion.article>
  )
}
