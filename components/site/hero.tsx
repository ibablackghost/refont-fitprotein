'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const slides = [
  {
    src: '/walpaperbackground/slide-1.webp',
    alt: 'Prise de masse — nutrition sportive',
  },
  {
    src: '/walpaperbackground/slide-2.webp',
    alt: 'Perte de poids — performance',
  },
]

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('.hero-brand', { y: 28, opacity: 0, duration: 0.7 })
          .from('.hero-title', { y: 40, opacity: 0, duration: 0.8 }, '-=0.35')
          .from('.hero-copy', { y: 24, opacity: 0, duration: 0.6 }, '-=0.45')
          .from('.hero-cta', { y: 16, opacity: 0, duration: 0.5 }, '-=0.35')

        const slidesEl = gsap.utils.toArray<HTMLElement>('.hero-slide')
        if (slidesEl.length > 1) {
          // Prochaine slide déjà opaque en dessous → on ne fade que celle du dessus (pas de trou noir)
          gsap.set(slidesEl, { opacity: 1, scale: 1 })
          slidesEl.forEach((slide, i) => {
            gsap.set(slide, { zIndex: i === 0 ? 2 : 1 })
          })
          gsap.set(slidesEl[0], { scale: 1.0 })

          const hold = 4
          const fade = 1.1
          const cycle = hold + fade
          const slider = gsap.timeline({ repeat: -1 })

          slidesEl.forEach((slide, i) => {
            const next = slidesEl[(i + 1) % slidesEl.length]
            const t = i * cycle

            slider
              .set(next, { zIndex: 1, opacity: 1, scale: 1.06 }, t)
              .set(slide, { zIndex: 2 }, t)
              .fromTo(
                slide,
                { scale: 1 },
                { scale: 1.08, duration: hold + fade, ease: 'none' },
                t,
              )
              .to(slide, { opacity: 0, duration: fade, ease: 'power2.inOut' }, t + hold)
              .to(next, { scale: 1, duration: fade, ease: 'power2.inOut' }, t + hold)
              .set(slide, { zIndex: 0, scale: 1 }, t + hold + fade)
          })
        }
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.hero-slide', { opacity: 1, zIndex: 1 })
        gsap.set('.hero-slide:first-child', { zIndex: 2 })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} className="relative z-0 min-h-[88vh] w-full overflow-hidden bg-[#1a2330]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="hero-slide absolute inset-0 h-full w-full"
            style={{ zIndex: i === 0 ? 2 : 1 }}
          >
            <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-ink/90 via-ink/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/85 via-transparent to-ink/30" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="hero-brand flex flex-wrap items-center gap-4 sm:gap-6">
          <img
            src="/brand/fit-pro-logo-on-dark.webp"
            alt="Fit & Protein — 100% Sport et Bien-être"
            className="h-20 w-auto object-contain sm:h-24"
          />
          <span className="hidden h-12 w-px bg-white/35 sm:block sm:h-16" aria-hidden="true" />
          <img
            src="/amka/logo-on-dark.webp"
            alt="AMKA Sports Nutrition"
            className="h-16 w-auto object-contain sm:h-20"
          />
        </div>
        <h1 className="hero-title mt-6 max-w-2xl font-heading text-3xl font-bold leading-[1.08] text-white text-balance sm:text-5xl md:text-6xl">
          Premium sports nutrition for Africa&apos;s champions
        </h1>
        <p className="hero-copy mt-4 max-w-lg text-base text-white/75 text-pretty sm:text-lg">
          Partenaire officiel AMKA Nutrition au Sénégal — whey, créatine et conseils pour performer.
        </p>
        <div className="hero-cta mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 bg-sand px-6 py-3.5 text-sm font-bold text-sand-foreground transition-colors hover:bg-white"
          >
            Découvrir la boutique
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/boutique?cat=amka"
            className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-sand hover:text-sand"
          >
            Gamme AMKA
          </Link>
        </div>
      </div>
    </section>
  )
}
