import { About } from '../components/sections/About'
import { Certificates } from '../components/sections/Certificates'
import { Contact } from '../components/sections/Contact'
import { Education } from '../components/sections/Education'
import { Hero } from '../components/sections/Hero'
import { Projects } from '../components/sections/Projects'
import { Skills } from '../components/sections/Skills'

export function HomePage() {
  return <><Hero /><About /><Skills /><Projects /><Education /><Certificates /><Contact /></>
}
