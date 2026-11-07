import type { Project } from '../../types'
import { useLanguage } from '../../i18n/LanguageContext'

export function ProjectImage({ project, placement = 'card' }: { project: Project; placement?: 'card' | 'detail' }) {
  const { language } = useLanguage()
  return (
    <figure className={`project-image project-image-${placement} project-image-${project.slug}`}>
      <img src={project.image.src} alt={project.image.alt[language]} width="960" loading={placement === 'detail' ? 'eager' : 'lazy'} />
      <figcaption>
        <span className="image-credit">{project.image.sourceUrl ? <a href={project.image.sourceUrl} target="_blank" rel="noreferrer">{project.image.title}</a> : <span>{project.image.title}</span>}<span>{project.image.creator}</span>{project.image.licenseUrl ? <a href={project.image.licenseUrl} target="_blank" rel="noreferrer">{project.image.license}</a> : <span>{project.image.license}</span>}</span>
      </figcaption>
    </figure>
  )
}
