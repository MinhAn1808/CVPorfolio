import type { Language } from '../../types'
import { useLanguage } from '../../i18n/LanguageContext'

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  return (
    <div className="language-switch" role="group" aria-label={t.labels.language}>
      <button type="button" className={language === 'en' ? 'selected' : ''} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
      <span aria-hidden="true">/</span>
      <button type="button" className={language === 'vi' ? 'selected' : ''} aria-pressed={language === 'vi'} onClick={() => setLanguage('vi')}>VI</button>
    </div>
  )
}
