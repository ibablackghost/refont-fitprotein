import Link from 'next/link'
import { SiteShell } from '@/components/site/site-shell'

export default function PanierPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-primary">Panier</h1>
        <p className="mt-3 text-muted-foreground">Votre panier est vide pour le moment.</p>
        <Link
          href="/boutique"
          className="mt-8 inline-flex bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
        >
          Continuer vos achats
        </Link>
      </div>
    </SiteShell>
  )
}
