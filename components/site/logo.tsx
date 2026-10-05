import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'horizontal' | 'stacked' | 'mark'

const sources: Record<Variant, { dark: string; light: string }> = {
  horizontal: { dark: '/jollof/logo-horizontal.webp', light: '/jollof/logo-horizontal-light.webp' },
  stacked: { dark: '/jollof/logo-stacked.webp', light: '/jollof/logo-stacked-light.webp' },
  mark: { dark: '/jollof/mark.webp', light: '/jollof/mark-light.webp' },
}

/** Logo Jollof Protéine — `onDark` pour la version au « J » blanc */
export function JollofMark({
  className,
  variant = 'horizontal',
  onDark = false,
}: {
  className?: string
  variant?: Variant
  onDark?: boolean
}) {
  const src = sources[variant][onDark ? 'light' : 'dark']
  return (
    <img
      src={src}
      alt={variant === 'mark' ? '' : 'Jollof Protéine'}
      aria-hidden={variant === 'mark' ? true : undefined}
      className={cn('h-12 w-auto object-contain', className)}
    />
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center', className)}
      aria-label="Accueil Jollof Protéine"
    >
      <JollofMark className="h-9 sm:h-11" />
    </Link>
  )
}
