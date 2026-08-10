import Link from 'next/link'
import { brands } from '@/lib/data'
import { SectionHeader } from './section-header'

export function BrandsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader
        title="Marques partenaires"
        subtitle="AMKA Nutrition en tête, puis les références mondiales."
        href="/marques"
        linkLabel="Voir toutes"
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map((b) => (
          <Link
            key={b.id}
            href={b.id === 'amka' ? '/boutique?cat=amka' : `/marques#${b.id}`}
            className="group flex flex-col items-center gap-2 border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex aspect-square w-full items-center justify-center overflow-hidden bg-mist p-3">
              <img
                src={b.image}
                alt={b.name}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-center text-xs font-semibold text-ink">{b.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
