import Link from 'next/link'
import { SiteShell } from '@/components/site/site-shell'

export default function ComptePage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-primary">Mon compte</h1>
        <p className="mt-3 text-muted-foreground">
          L&apos;espace client arrive bientôt. Contactez-nous sur WhatsApp pour suivre une commande.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/221783813181"
            className="bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
          >
            WhatsApp
          </a>
          <Link href="/boutique" className="border border-border px-6 py-3 text-sm font-semibold">
            Boutique
          </Link>
        </div>
      </div>
    </SiteShell>
  )
}
