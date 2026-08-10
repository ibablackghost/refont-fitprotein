import Link from 'next/link'
import { cn } from '@/lib/utils'

/** Logo Fit & Protein complet (icône + écritures d’origine) */
export function FitProMark({
  className,
  onDark = false,
}: {
  className?: string
  /** Version texte blanc pour fonds sombres */
  onDark?: boolean
}) {
  return (
    <img
      src={onDark ? '/brand/fit-pro-logo-on-dark.webp' : '/brand/fit-pro-logo.webp'}
      alt="Fit & Protein"
      className={cn('h-12 w-auto object-contain', className)}
    />
  )
}

export function AmkaMark({ className }: { className?: string }) {
  return (
    <img
      src="/amka/logo.png"
      alt=""
      className={cn('h-8 w-auto object-contain', className)}
      aria-hidden="true"
    />
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center', className)}
      aria-label="Accueil Fit & Protein"
    >
      <FitProMark className="h-12 sm:h-14" />
    </Link>
  )
}
