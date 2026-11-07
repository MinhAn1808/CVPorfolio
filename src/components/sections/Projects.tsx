import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { projects } from '../../data/projects'
import { ProjectCard } from '../common/ProjectCard'
import { SectionHeading } from '../common/SectionHeading'

export function Projects() {
  const { t } = useLanguage()
  return (
    <section className="content-section projects-section section-shell" id="projects">
      <SectionHeading number="03" eyebrow={t.home.projectsEyebrow} title={t.home.projectsTitle} lead={t.home.projectsLead} />
      <div className="projects-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
      <Link className="projects-next" to={`/projects/${projects[0].slug}`}><span>{t.labels.selected}</span><ArrowRight size={18} /></Link>
    </section>
  )
}
