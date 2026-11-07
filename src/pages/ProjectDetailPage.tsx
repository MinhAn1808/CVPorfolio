import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import type { BilingualText, Language } from '../types'
import { TechBadge } from '../components/common/TechBadge'
import { ProjectImage } from '../components/common/ProjectImage'

function CopyList({ items, language, ordered = false }: { items: BilingualText[]; language: Language; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul'
  return <Tag className="detail-list">{items.map((item, index) => <li key={index}><span className="list-mark">{ordered ? String(index + 1).padStart(2, '0') : <Check size={14} />}</span><span>{item[language]}</span></li>)}</Tag>
}

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  const { language, t } = useLanguage()
  const reduced = useReducedMotion()
  if (!project) return <Navigate to="/" replace />
  const copy = (value: BilingualText) => value[language]
  const next = projects[(projects.indexOf(project) + 1) % projects.length]
  return (
    <motion.article className="project-detail" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <div className="detail-shell">
        <Link className="back-link" to="/#projects"><ArrowLeft size={16} />{t.actions.back}</Link>
        <header className="detail-hero">
          <div className="detail-eyebrow"><span>{project.index} / 03</span><span>{copy(project.type)}</span></div>
          <h1>{copy(project.title)}</h1>
          <p>{copy(project.overview)}</p>
          <div className="detail-meta"><div><span>{t.labels.role}</span><strong>{copy(project.role)}</strong></div><div><span>{t.labels.team}</span><strong>{copy(project.team)}</strong></div></div>
        </header>
        <ProjectImage project={project} placement="detail" />
        <div className="detail-content">
          <section className="detail-section" id="overview"><div className="detail-section-title"><span>01</span><h2>{t.detail.overview}</h2></div><p>{copy(project.detail.problem)}</p></section>
          <section className="detail-section"><div className="detail-section-title"><span>02</span><h2>{t.labels.solution}</h2></div><p>{copy(project.detail.solution)}</p></section>
          <section className="detail-section"><div className="detail-section-title"><span>03</span><h2>{t.detail.teamRole}</h2></div><p>{copy(project.detail.implementation)}</p><div className="role-stamp"><span>{t.labels.role}</span><strong>{copy(project.role)}</strong><span>{copy(project.team)}</span></div></section>
          <section className="detail-section"><div className="detail-section-title"><span>04</span><h2>{t.labels.responsibilities}</h2></div><CopyList items={project.responsibilities} language={language} ordered /></section>
          <section className="detail-section architecture-section"><div className="detail-section-title"><span>05</span><h2>{t.labels.architecture}</h2></div><p>{copy(project.detail.architecture)}</p><div className="architecture-diagram" aria-label={t.detail.conceptual}>
            <div className="diagram-label"><span>{project.slug === 'libot' ? t.detail.stepModel : t.detail.conceptual}</span><span>↘</span></div>
            {project.slug === 'libot' ? <div className="step-type-diagram"><div className="step-type-core"><span>EXTENSIBLE MODEL</span><strong>Step Type</strong></div><div className="step-type-branches"><div className="step-type-branch"><span>01</span><strong>MOVE</strong></div><div className="step-type-branch"><span>02</span><strong>SCAN</strong></div><div className="step-type-branch step-type-future"><span>+</span><strong>{t.detail.futureStep}</strong></div></div></div> : project.slug === 'fertility-management' ? <div className="conceptual-nodes">{project.detail.diagram.map((node, index) => <div className="diagram-node" key={node}><span>{String(index + 1).padStart(2, '0')}</span><strong>{node}</strong></div>)}</div> : <div className="diagram-flow">{project.detail.diagram.map((node, index) => <div className="diagram-node-wrap" key={node}><div className="diagram-node"><span>{String(index + 1).padStart(2, '0')}</span><strong>{node}</strong></div>{index < project.detail.diagram.length - 1 && <div className="diagram-arrow"><ArrowRight size={16} /></div>}</div>)}</div>}
            <p className="diagram-note">{project.slug === 'libot' ? t.detail.stepModelNote : project.slug === 'fertility-management' ? t.detail.conceptualNote : t.detail.note}</p>
          </div></section>
          <section className="detail-section"><div className="detail-section-title"><span>06</span><h2>{t.labels.implementation}</h2></div><p>{copy(project.detail.implementation)}</p><div className="detail-points"><h3>{t.labels.highlights}</h3><CopyList items={project.highlights} language={language} /></div></section>
          <section className="detail-section"><div className="detail-section-title"><span>07</span><h2>{t.labels.decisions}</h2></div><CopyList items={project.detail.decisions} language={language} /></section>
          <section className="detail-section detail-two-col"><div><div className="detail-section-title"><span>08</span><h2>{t.labels.challenges}</h2></div><CopyList items={project.detail.challenges} language={language} /></div><div><div className="detail-section-title"><span>09</span><h2>{language === 'en' ? 'Solutions' : 'Giải pháp'}</h2></div><CopyList items={project.detail.solutions} language={language} /></div></section>
          <section className="detail-section"><div className="detail-section-title"><span>10</span><h2>{t.labels.stack}</h2></div><div className="detail-tech">{project.technologies.map(tech => <TechBadge key={tech}>{tech}</TechBadge>)}</div></section>
          <div className="detail-source-row">{project.github ? <a className="inline-link" href={project.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a> : <span className="muted-label">{t.detail.noGithub}</span>}</div>
        </div>
        <Link className="next-project-link" to={`/projects/${next.slug}`}><span><small>{language === 'en' ? 'Next case study' : 'Case study tiếp theo'}</small><strong>{next.shortTitle}</strong></span><ArrowRight size={20} /></Link>
      </div>
    </motion.article>
  )
}
