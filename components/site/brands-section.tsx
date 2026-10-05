import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { brands } from '@/lib/data'

export function BrandsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="jp-eyebrow text-muted-foreground">Sélection</p>
            <h2 className="jp-title mt-3 text-3xl text-ink sm:text-4xl">Nos marques</h2>
          </div>
          <Link
            href="/marques"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:text-ink"
          >
            Toutes les marques
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
          {brands.map((b) => (
            <Link
              key={b.id}
              href={`/boutique?brand=${encodeURIComponent(b.name)}`}
              className="group flex items-center gap-4 bg-white p-4 transition-colors hover:bg-ink"
            >
              <span className="h-14 w-14 shrink-0 overflow-hidden bg-background">
                <img src={b.image} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-heading text-sm font-extrabold uppercase italic text-ink group-hover:text-white">
                  {b.name}
                </span>
                <span className="mt-0.5 block truncate text-xs text-muted-foreground group-hover:text-white/60">
                  {b.description}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
