import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export function PartnerBanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="/amka/runners.png"
          alt=""
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sand">
            Partenariat officiel
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-white text-balance sm:text-5xl">
            Fit &amp; Protein × AMKA Nutrition
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 text-pretty">
            Premium sports nutrition for Africa&apos;s next generation. Fit &amp; Protein est le
            partenaire de distribution AMKA au Sénégal — whey, créatine et conseils pour
            championner chaque objectif.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/boutique?cat=amka"
              className="inline-flex items-center gap-2 bg-sand px-5 py-3 text-sm font-bold text-sand-foreground transition-colors hover:bg-white"
            >
              Voir la gamme AMKA
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://www.amkanutrition.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-sand hover:text-sand"
            >
              amkanutrition.com
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <img src="/amka/logo.png" alt="AMKA Nutrition" className="h-16 w-auto object-contain" />
          <p className="text-center text-sm font-medium uppercase tracking-[0.22em] text-sand">
            For Champions
          </p>
          <p className="text-center text-xs leading-relaxed text-white/60 text-pretty">
            World-Class by Science · Made for Africa · Created for Champions
          </p>
        </div>
      </div>
    </section>
  )
}
