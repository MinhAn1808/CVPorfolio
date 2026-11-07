import { useLanguage } from '../../i18n/LanguageContext'
import { SectionHeading } from '../common/SectionHeading'
import { certificates } from '../../data/certificates'
import { ArrowUpRight, Award } from 'lucide-react'

export function Certificates() {
  const { t } = useLanguage()
  return (
    <section className="content-section credentials-section section-shell" id="certificates">
      <SectionHeading number="05" eyebrow={t.home.certificatesEyebrow} title={t.home.certificatesTitle} lead={t.home.certificatesLead} />
      <div className="credentials-grid">{certificates.map((certificate, index) => <article className="credential-item" key={certificate.verificationUrl}><div className="credential-icon"><Award size={17} strokeWidth={1.6} /></div><div className="credential-copy"><span className="credential-index">{String(index + 1).padStart(2, '0')} · {certificate.issuer}</span><h3>{certificate.title}</h3><a className="credential-link" href={certificate.verificationUrl} target="_blank" rel="noreferrer">{t.actions.verify}<ArrowUpRight size={14} /></a></div></article>)}</div>
    </section>
  )
}
