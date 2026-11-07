export type Language = 'en' | 'vi'

export interface BilingualText {
  en: string
  vi: string
}

export interface SkillCategory {
  number: string
  title: BilingualText
  description: BilingualText
  skills: string[]
  icon: string
  supporting?: boolean
}

export interface Project {
  slug: string
  index: string
  image: {
    src: string
    alt: BilingualText
    title: string
    creator: string
    sourceUrl: string
    license: string
    licenseUrl: string
  }
  title: BilingualText
  shortTitle: string
  type: BilingualText
  role: BilingualText
  team: BilingualText
  status: BilingualText
  overview: BilingualText
  responsibilities: BilingualText[]
  highlights: BilingualText[]
  technologies: string[]
  github?: string
  detail: {
    problem: BilingualText
    solution: BilingualText
    architecture: BilingualText
    implementation: BilingualText
    decisions: BilingualText[]
    challenges: BilingualText[]
    solutions: BilingualText[]
    currentStatus: BilingualText
    diagram: string[]
  }
}
