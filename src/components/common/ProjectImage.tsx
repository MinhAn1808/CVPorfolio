import type { Project } from '../../types'
import { useLanguage } from '../../i18n/LanguageContext'

export function ProjectImage({ project, placement = 'card' }: { project: Project; placement?: 'card' | 'detail' }) {
  const { language, t } = useLanguage()
  return (
    <figure className={`project-image project-image-${placement} project-image-${project.slug}`}>
      <img src={project.image.src} alt={project.image.alt[language]} width="960" height="960" loading={placement === 'detail' ? 'eager' : 'lazy'} />
      <figcaption>
        <span>{t.detail.illustrative}</span>
        <span className="image-credit"><a href={project.image.sourceUrl} target="_blank" rel="noreferrer">{project.image.title}</a><span>{project.image.creator}</span><a href={project.image.licenseUrl} target="_blank" rel="noreferrer">{project.image.license}</a></span>
      </figcaption>
    </figure>
  )
}
