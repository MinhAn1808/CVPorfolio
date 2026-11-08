import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { getTranslation } from '.'
import type { Language } from '../types'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: ReturnType<typeof getTranslation>
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => localStorage.getItem('lma-language') === 'en' ? 'en' : 'vi')
  const setLanguage = (next: Language) => {
    setLanguageState(next)
    localStorage.setItem('lma-language', next)
    document.documentElement.lang = next
  }
  useEffect(() => { document.documentElement.lang = language }, [language])
  const value = useMemo(() => ({ language, setLanguage, t: getTranslation(language) }), [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
