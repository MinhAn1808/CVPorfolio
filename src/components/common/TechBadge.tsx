export function TechBadge({ children, quiet = false }: { children: string; quiet?: boolean }) {
  return <span className={`tech-badge${quiet ? ' tech-badge-quiet' : ''}`}>{children}</span>
}
