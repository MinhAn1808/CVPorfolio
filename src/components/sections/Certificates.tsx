import { useLanguage } from '../../i18n/LanguageContext'
import { SectionHeading } from '../common/SectionHeading'

export function Certificates() {
  const { language, t } = useLanguage()
  return (
    <section className="content-section credentials-section section-shell" id="certificates">
      <SectionHeading number="05" eyebrow={t.home.certificatesEyebrow} title={t.home.certificatesTitle} lead={t.home.certificatesLead} />
      <div className="credentials-empty"><span className="empty-symbol">—</span><span>{language === 'en' ? 'No verified items yet' : 'Chưa có thông tin xác thực'}</span><span className="empty-rule" /></div>
    </section>
  )
}
