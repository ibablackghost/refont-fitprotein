import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { brands } from '@/lib/data'

export function BrandsSection() {
  const [amka, ...others] = brands

  return (
    <section className="relative overflow-hidden bg-[#f4f3fb]">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-sand/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              Sélection
            </p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Marques partenaires
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground text-pretty">
              AMKA Nutrition en tête, puis les références mondiales disponibles chez Fit &amp;
              Protein.
            </p>
          </div>
          <Link
            href="/marques"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-ink"
          >
            Toutes les marques
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* AMKA featured */}
        {amka ? (
          <Link
            href="/boutique?cat=amka"
            className="group mb-6 grid overflow-hidden border border-border bg-white transition-shadow hover:shadow-[0_12px_36px_rgba(38,106,204,0.12)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
          >
            <div className="relative flex min-h-[220px] items-center justify-center bg-ink p-8 sm:min-h-[260px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(38,106,204,0.35),transparent_55%)]" />
              <img
                src={amka.image}
                alt={amka.name}
                className="relative z-[1] h-20 w-auto object-contain sm:h-24"
              />
              <span className="absolute left-4 top-4 bg-sand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-sand-foreground">
                Partenaire officiel
              </span>
            </div>
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                Made for Africa
              </p>
              <h3 className="mt-2 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
                {amka.name}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
                {amka.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-ink">
                Voir la gamme AMKA
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ) : null}

        {/* Other brands */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {others.map((b) => (
            <Link
              key={b.id}
              href={`/boutique?brand=${encodeURIComponent(b.name)}`}
              className="group relative flex flex-col bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-white p-5">
                <div className="absolute inset-x-0 top-0 h-px bg-border" />
                <div className="absolute inset-y-0 left-0 w-px bg-border" />
                <div className="absolute inset-y-0 right-0 w-px bg-border" />
                <img
                  src={b.image}
                  alt={b.name}
                  className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                    Voir la marque
                  </span>
                </div>
              </div>
              <div className="border border-t-0 border-border px-3 py-3 text-center">
                <span className="block truncate text-[13px] font-bold text-ink">{b.name}</span>
                <span className="mt-0.5 block truncate text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Boutique
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
