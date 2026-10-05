import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteShell } from '@/components/site/site-shell'
import { Hero } from '@/components/site/hero'
import { FeaturesBar } from '@/components/site/features-bar'
import { SectionHeader } from '@/components/site/section-header'
import { ProductCarousel } from '@/components/site/product-carousel'
import { ProductCard } from '@/components/site/product-card'
import { UniversSection } from '@/components/site/univers-section'
import { BrandBanner } from '@/components/site/brand-banner'
import { BrandsSection } from '@/components/site/brands-section'
import { RevealSection } from '@/components/site/reveal-section'
import {
  WHATSAPP_NUMBER,
  bestSellers,
  fitnessTop,
  shoesTop,
  supplementsTop,
} from '@/lib/data'

export default function Page() {
  return (
    <SiteShell>
      <Hero />
      <FeaturesBar />

      <UniversSection />

      <RevealSection className="mx-auto max-w-7xl px-4 pb-16">
        <SectionHeader
          eyebrow="Top ventes"
          title="Les plus demandés"
          subtitle="Les favoris de la communauté Jollof, toutes catégories confondues."
          href="/boutique"
        />
        <div className="reveal-item">
          <ProductCarousel products={bestSellers} />
        </div>
      </RevealSection>

      <section className="bg-white py-16">
        <RevealSection className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="jp-eyebrow text-muted-foreground">Chaussures</p>
              <h2 className="jp-title mt-3 text-3xl text-ink sm:text-4xl">
                Chausse-toi <span className="text-primary">pour gagner</span>
              </h2>
              <p className="mt-2 max-w-lg text-sm text-muted-foreground text-pretty">
                Training, running et lifestyle — pointures du 39 au 45.
              </p>
            </div>
            <Link
              href="/boutique?cat=chaussures"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:text-ink"
            >
              Toutes les chaussures
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {shoesTop.map((p) => (
              <div key={p.id} className="reveal-item">
                <ProductCard product={p} className="border border-border" />
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      <RevealSection className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader
          eyebrow="Compléments alimentaires"
          title="Nutrition sportive"
          subtitle="Whey, créatine, gainers et acides aminés pour construire et récupérer."
          href="/boutique?cat=complements"
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {supplementsTop.map((p) => (
            <div key={p.id} className="reveal-item">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </RevealSection>

      <BrandBanner />

      <RevealSection className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader
          eyebrow="Fitness"
          title="Équipe ta salle"
          subtitle="Haltères, kettlebells et cardio pour t'entraîner où tu veux."
          href="/boutique?cat=fitness"
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {fitnessTop.map((p) => (
            <div key={p.id} className="reveal-item">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </RevealSection>

      <BrandsSection />

      <section className="bg-background py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
          <div className="flex items-start gap-5">
            <span className="jp-line hidden h-20 sm:block" aria-hidden="true" />
            <div>
              <h2 className="jp-title text-3xl text-ink sm:text-4xl">
                Besoin d&apos;un <span className="text-primary">conseil</span> ?
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground text-pretty">
                Programme, choix de complément ou de pointure : l&apos;équipe Jollof te répond sur
                WhatsApp.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex -skew-x-6 bg-primary px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-ink"
          >
            <span className="skew-x-6">Écrire sur WhatsApp</span>
          </a>
        </div>
      </section>
    </SiteShell>
  )
}
