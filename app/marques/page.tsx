import type { Metadata } from 'next'
import { SiteShell } from '@/components/site/site-shell'
import { brands } from '@/lib/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marques',
  description: 'Les plus grandes marques de nutrition sportive chez Fit & Protein × amka.',
}

export default function MarquesPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-ink">
        <img
          src="/hero/athlete.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime">Marques</p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-white text-balance sm:text-5xl">
            Fit &amp; Protein
          </h1>
          <p className="mt-3 max-w-xl text-white/70 text-pretty">
            Des références mondiales sélectionnées pour la qualité et les résultats.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <article
              key={b.id}
              id={b.id}
              className="scroll-mt-28 overflow-hidden border border-border bg-card"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={b.image} alt={b.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h2 className="font-heading text-xl font-extrabold text-primary">{b.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">{b.description}</p>
                <Link
                  href="/boutique"
                  className="mt-4 inline-block text-sm font-bold text-primary underline-offset-4 hover:underline"
                >
                  Voir les produits
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
