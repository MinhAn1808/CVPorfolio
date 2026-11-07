import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Github, Linkedin, MapPin, Send } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { profile } from '../../data/profile'
import { SectionHeading } from '../common/SectionHeading'

type FormState = 'idle' | 'loading' | 'success' | 'error' | 'unavailable'

export function Contact() {
  const { language, t } = useLanguage()
  const [state, setState] = useState<FormState>('idle')
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!profile.email) { setState('unavailable'); return }
    setState('loading')
    const body = `${values.message}\n\nFrom: ${values.name} (${values.email})`
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setState('success')
  }
  const formMessage = state === 'success' ? t.form.success : state === 'error' ? t.form.error : state === 'unavailable' ? t.form.unavailable : ''
  return (
    <section className="content-section contact-section section-shell" id="contact">
      <SectionHeading number="06" eyebrow={t.home.contactEyebrow} title={t.home.contactTitle} lead={t.home.contactLead} />
      <div className="contact-layout">
        <div className="contact-info">
          <span className="contact-line-label">{language === 'en' ? 'Find me here' : 'Kết nối với tôi'}</span>
          {profile.email && <a className="contact-method" href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong><ArrowUpRight size={16} /></a>}
          {profile.github && <a className="contact-method" href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>{profile.github.replace(/^https?:\/\//, '')}</strong><Github size={16} /></a>}
          {profile.linkedin && <a className="contact-method" href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>{profile.linkedin.replace(/^https?:\/\//, '')}</strong><Linkedin size={16} /></a>}
          <div className="contact-method contact-location"><span>{t.labels.location}</span><strong><MapPin size={15} />{language === 'en' ? profile.location : 'Việt Nam'}</strong><span className="location-note">{language === 'en' ? 'Based in Vietnam' : 'Đang sinh sống tại Việt Nam'}</span></div>
          {!profile.email && <p className="contact-config-note">{t.form.unavailable}</p>}
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row"><label>{t.form.name}<input name="name" autoComplete="name" required value={values.name} onChange={event => setValues({ ...values, name: event.target.value })} placeholder={t.form.namePlaceholder} /></label><label>{t.form.email}<input name="email" type="email" autoComplete="email" required value={values.email} onChange={event => setValues({ ...values, email: event.target.value })} placeholder={t.form.emailPlaceholder} /></label></div>
          <label>{t.form.subject}<input name="subject" required value={values.subject} onChange={event => setValues({ ...values, subject: event.target.value })} placeholder={t.form.subjectPlaceholder} /></label>
          <label>{t.form.message}<textarea name="message" required rows={5} value={values.message} onChange={event => setValues({ ...values, message: event.target.value })} placeholder={t.form.messagePlaceholder} /></label>
          <div className="form-bottom"><button className="button button-primary" type="submit" disabled={state === 'loading'}>{state === 'loading' ? t.actions.sending : t.actions.send}<Send size={15} /></button><span className={`form-feedback form-feedback-${state}`} role="status" aria-live="polite">{formMessage}</span></div>
        </form>
      </div>
    </section>
  )
}
