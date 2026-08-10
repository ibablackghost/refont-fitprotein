import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function SectionHeader({
  title,
  href = '/boutique',
  linkLabel = 'Voir plus',
  subtitle,
}: {
  title: string
  href?: string
  linkLabel?: string
  subtitle?: string
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-primary text-balance sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 max-w-lg text-sm text-muted-foreground text-pretty">{subtitle}</p>
        ) : null}
      </div>
      <Link
        href={href}
        className="flex shrink-0 items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-foreground"
      >
        {linkLabel}
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
