import { motion, useReducedMotion } from 'framer-motion'

interface Props { eyebrow: string; title: string; lead?: string; number: string }

export function SectionHeading({ eyebrow, title, lead, number }: Props) {
  const reduced = useReducedMotion()
  return (
    <motion.div className="section-heading" initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
      <div className="section-marker"><span>{number}</span><span className="marker-line" /><span>{eyebrow}</span></div>
      <div className="section-heading-copy"><h2>{title}</h2>{lead && <p>{lead}</p>}</div>
    </motion.div>
  )
}
