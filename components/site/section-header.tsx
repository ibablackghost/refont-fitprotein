import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function SectionHeader({
  title,
  eyebrow,
  href = '/boutique',
  linkLabel = 'Voir tout',
  subtitle,
}: {
  title: string
  eyebrow?: string
  href?: string
  linkLabel?: string
  subtitle?: string
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? <p className="jp-eyebrow mb-3 text-muted-foreground">{eyebrow}</p> : null}
        <h2 className="jp-title text-3xl text-ink text-balance sm:text-4xl">{title}</h2>
        {subtitle ? (
          <p className="mt-2 max-w-lg text-sm text-muted-foreground text-pretty">{subtitle}</p>
        ) : null}
      </div>
      <Link
        href={href}
        className="flex shrink-0 items-center gap-1 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:text-ink"
      >
        {linkLabel}
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
