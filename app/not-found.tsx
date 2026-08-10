import Link from 'next/link'
import { SiteShell } from '@/components/site/site-shell'

export default function NotFound() {
  return (
    <SiteShell>
      <div className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        <p className="font-heading text-6xl font-extrabold text-lime">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-primary">Page introuvable</h1>
        <p className="mt-2 text-muted-foreground">Ce produit ou cette page n&apos;existe pas.</p>
        <Link
          href="/boutique"
          className="mt-8 bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
        >
          Retour à la boutique
        </Link>
      </div>
    </SiteShell>
  )
}
