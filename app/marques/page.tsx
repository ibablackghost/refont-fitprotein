import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteShell } from '@/components/site/site-shell'
import { brands, products } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Marques',
  description: 'Les marques de nutrition, de fitness et de chaussures disponibles chez Jollof Protéine.',
}

export default function MarquesPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-ink">
        <img
          src="/jollof/photos/univers-chaussures.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <p className="jp-eyebrow text-white/80">Marques</p>
          <h1 className="jp-title mt-4 text-5xl text-white text-balance sm:text-6xl">
            Nos <span className="text-primary">marques</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/70 text-pretty">
            Des références reconnues, sélectionnées pour leur qualité et leurs résultats.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b) => {
            const count = products.filter((p) => p.brand === b.name).length
            return (
              <Link
                key={b.id}
                id={b.id}
                href={`/boutique?brand=${encodeURIComponent(b.name)}`}
                className="group scroll-mt-28 overflow-hidden bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="border-t-[3px] border-primary p-5">
                  <h2 className="jp-title text-2xl text-ink">{b.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">{b.description}</p>
                  <span className="mt-4 inline-block text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
                    {count} produit{count > 1 ? 's' : ''} →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </SiteShell>
  )
}
