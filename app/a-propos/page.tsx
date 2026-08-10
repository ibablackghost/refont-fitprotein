import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteShell } from '@/components/site/site-shell'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Fit & Protein × AMKA Nutrition — partenariat officiel. Premium sports nutrition au Sénégal.',
}

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="relative min-h-[55vh] overflow-hidden bg-ink">
        <img
          src="/amka/runners.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sand">À propos</p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold text-white text-balance sm:text-5xl">
            Fit &amp; Protein × AMKA
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/75 text-pretty">
            Une boutique à Dakar, portée par l&apos;ambition AMKA : championner la next generation
            africaine.
          </p>
        </div>
      </section>

      <section id="partenariat" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Partenariat officiel
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-ink text-balance">
              AMKA Nutrition — For Champions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80 text-pretty">
              Fit &amp; Protein est le partenaire de distribution d&apos;
              <a
                href="https://www.amkanutrition.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                AMKA Nutrition
              </a>{' '}
              au Sénégal. Ensemble, nous proposons une nutrition sportive premium — World-Class by
              Science, Made for Africa — avec conseil local et livraison fiable.
            </p>
            <a
              href="https://www.amkanutrition.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-ink"
            >
              Visiter amkanutrition.com
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 border border-border bg-mist p-10">
            <img src="/amka/logo.png" alt="AMKA Nutrition" className="h-20 w-auto object-contain" />
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              World-Class by Science · Made for Africa
            </p>
          </div>
        </div>
      </section>

      <section id="livraison" className="bg-mist py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          {[
            {
              id: 'livraison',
              title: 'Livraison',
              text: 'Dakar et régions — suivi WhatsApp jusqu’à la remise en main propre.',
            },
            {
              id: 'paiement',
              title: 'Paiement',
              text: 'Paiement à la livraison, Wave ou Orange Money selon disponibilité.',
            },
            {
              id: 'faq',
              title: 'Authenticité',
              text: 'Gamme AMKA officielle + grandes marques sourcées via circuits fiables.',
            },
          ].map((item) => (
            <div key={item.title} id={item.id} className="scroll-mt-28">
              <h3 className="font-heading text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-ink">Champion your life.</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground text-pretty">
          Explorez la gamme AMKA ou écrivez-nous pour un plan adapté.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/boutique?cat=amka"
            className="bg-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink"
          >
            Gamme AMKA
          </Link>
          <a
            href="https://wa.me/221783813181"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </SiteShell>
  )
}
