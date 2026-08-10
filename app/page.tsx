import { SiteShell } from '@/components/site/site-shell'
import { Hero } from '@/components/site/hero'
import { FeaturesBar } from '@/components/site/features-bar'
import { SectionHeader } from '@/components/site/section-header'
import { ProductCarousel } from '@/components/site/product-carousel'
import { ProductCard } from '@/components/site/product-card'
import { BrandsSection } from '@/components/site/brands-section'
import { PartnerBanner } from '@/components/site/partner-banner'
import { RevealSection } from '@/components/site/reveal-section'
import { amkaProducts, mostWanted, massGainTop, topSellers } from '@/lib/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Page() {
  return (
    <SiteShell>
      <Hero />
      <FeaturesBar />

      {/* Gamme partenaire AMKA */}
      <RevealSection className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-sand-foreground/70">
              Partenaire AMKA Nutrition
            </p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              La gamme AMKA
            </h2>
            <p className="mt-1 max-w-lg text-sm text-muted-foreground text-pretty">
              Whey Chocolate, Vanilla &amp; Créatine Red Fruit — Made for Africa.
            </p>
          </div>
          <Link
            href="/boutique?cat=amka"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-ink"
          >
            Tout voir
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {amkaProducts.map((p) => (
            <div key={p.id} className="reveal-item">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-7xl px-4 pb-16">
        <SectionHeader
          title="Les plus demandés"
          subtitle="Sélection Fit & Protein × AMKA, plébiscitée à Dakar."
          href="/boutique"
        />
        <div className="reveal-item">
          <ProductCarousel products={mostWanted} />
        </div>
      </RevealSection>

      <section className="bg-mist py-16">
        <RevealSection className="mx-auto max-w-7xl px-4">
          <SectionHeader
            title="Prise de masse"
            subtitle="Whey AMKA, créatine et gainers pour construire du volume."
            href="/boutique?cat=prise-de-masse"
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {massGainTop.map((p) => (
              <div key={p.id} className="reveal-item">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      <BrandsSection />
      <PartnerBanner />

      <RevealSection id="top-ventes" className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader
          title="Top ventes"
          subtitle="Les best-sellers de la boutique."
          href="/boutique"
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {topSellers.map((p) => (
            <div key={p.id} className="reveal-item">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </RevealSection>

      <section className="border-t border-border bg-white py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-ink sm:text-3xl">
              Champion your life.
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground text-pretty">
              Besoin d&apos;un plan nutrition ? L&apos;équipe Fit &amp; Protein × AMKA vous répond
              sur WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/221783813181"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink"
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </section>
    </SiteShell>
  )
}
