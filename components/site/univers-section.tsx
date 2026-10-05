import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getProductsByCategory, univers } from '@/lib/data'
import { RevealSection } from './reveal-section'

export function UniversSection() {
  return (
    <RevealSection className="mx-auto max-w-7xl px-4 py-16">
      <p className="jp-eyebrow text-muted-foreground">Nos univers</p>
      <h2 className="jp-title mt-3 text-3xl text-ink sm:text-4xl">
        Tout pour <span className="text-primary">performer</span>
      </h2>

      <div className="mt-8 grid gap-3 sm:gap-4 md:grid-cols-3">
        {univers.map((u, i) => (
          <Link
            key={u.slug}
            href={`/boutique?cat=${u.slug}`}
            className="reveal-item group relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-ink md:aspect-[3/4]"
          >
            <img
              src={u.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <span className="absolute right-4 top-4 font-heading text-5xl font-black italic text-white/15">
              0{i + 1}
            </span>

            <div className="relative p-6">
              <span className="mb-4 block h-[3px] w-10 -skew-x-12 bg-primary transition-all duration-300 group-hover:w-20" />
              <h3 className="jp-title text-3xl text-white sm:text-4xl">{u.label}</h3>
              <p className="mt-2 text-sm text-white/70">{u.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
                {getProductsByCategory(u.slug).length} produits
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </RevealSection>
  )
}
