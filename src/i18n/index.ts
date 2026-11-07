import { en } from './en'
import { vi } from './vi'
import type { Language } from '../types'

export const translations = { en, vi }
export type Translation = typeof en
export const getTranslation = (language: Language): Translation => translations[language]
