'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { univers } from '@/lib/data'

gsap.registerPlugin(useGSAP)

const slides = [
  { src: '/jollof/photos/hero-accra.webp', alt: 'Athlète en séance de musculation en salle' },
  { src: '/jollof/photos/hero-lagos.webp', alt: 'Sportive en tenue de training dans une salle de sport' },
  { src: '/jollof/photos/hero-athlete.webp', alt: 'Athlète à l’entraînement avec haltère' },
]

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('.hero-line', { scaleY: 0, transformOrigin: 'top', duration: 0.9 })
          .from('.hero-eyebrow', { x: -24, opacity: 0, duration: 0.5 }, '-=0.6')
          .from('.hero-title-line', { yPercent: 110, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.35')
          .from('.hero-copy', { y: 20, opacity: 0, duration: 0.6 }, '-=0.45')
          .from('.hero-cta', { y: 16, opacity: 0, duration: 0.5 }, '-=0.35')
          .from('.hero-univers', { y: 24, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.25')
          .from('.hero-watermark', { x: 60, opacity: 0, duration: 1.2 }, 0.2)

        const slidesEl = gsap.utils.toArray<HTMLElement>('.hero-slide')
        if (slidesEl.length > 1) {
          // Slide suivante déjà opaque en dessous : seule celle du dessus s'estompe (pas de flash noir)
          gsap.set(slidesEl, { opacity: 1, scale: 1 })
          slidesEl.forEach((slide, i) => gsap.set(slide, { zIndex: i === 0 ? 2 : 1 }))

          const hold = 4.5
          const fade = 1.1
          const cycle = hold + fade
          const slider = gsap.timeline({ repeat: -1 })

          slidesEl.forEach((slide, i) => {
            const next = slidesEl[(i + 1) % slidesEl.length]
            const t = i * cycle
            slider
              .set(next, { zIndex: 1, opacity: 1, scale: 1.06 }, t)
              .set(slide, { zIndex: 2 }, t)
              .fromTo(slide, { scale: 1 }, { scale: 1.08, duration: cycle, ease: 'none' }, t)
              .to(slide, { opacity: 0, duration: fade, ease: 'power2.inOut' }, t + hold)
              .to(next, { scale: 1, duration: fade, ease: 'power2.inOut' }, t + hold)
              .set(slide, { zIndex: 0, scale: 1 }, t + cycle)
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
    <section ref={root} className="relative z-0 min-h-[88vh] w-full overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="hero-slide absolute inset-0 h-full w-full"
            style={{ zIndex: i === 0 ? 2 : 1 }}
          >
            <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover object-[70%_center]" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

      <img
        src="/jollof/mark-light.webp"
        alt=""
        aria-hidden="true"
        className="hero-watermark pointer-events-none absolute -right-10 top-1/2 z-[1] hidden w-[46vw] max-w-[720px] -translate-y-1/2 opacity-[0.07] lg:block"
      />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl gap-6 px-4 pb-14 pt-20 sm:gap-10 sm:pb-16 sm:pt-24">
        <span className="hero-line jp-line hidden h-56 shrink-0 self-start sm:block" aria-hidden="true" />

        <div className="flex flex-1 flex-col justify-end">
          <p className="hero-eyebrow jp-eyebrow text-white/80">Compléments · Fitness · Chaussures</p>

          <h1 className="jp-title mt-5 max-w-3xl text-5xl text-white sm:text-7xl md:text-[5.5rem]">
            <span className="block overflow-hidden pb-1">
              <span className="hero-title-line block">Nourris</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-title-line block">ta force.</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-title-line block text-primary">Dépasse-toi.</span>
            </span>
          </h1>

          <p className="hero-copy mt-6 max-w-lg text-base text-white/75 text-pretty sm:text-lg">
            Protéines, créatine, équipement et sneakers de sport — tout ce qu&apos;il faut pour
            t&apos;entraîner, livré à Dakar et partout au Sénégal.
          </p>

          <div className="hero-cta mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/boutique"
              className="inline-flex -skew-x-6 items-center gap-2 bg-primary px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink"
            >
              <span className="inline-flex skew-x-6 items-center gap-2">
                Découvrir la boutique
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/boutique?promo=1"
              className="inline-flex -skew-x-6 items-center gap-2 border-2 border-white/40 px-7 py-[14px] text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:border-primary hover:text-primary"
            >
              <span className="skew-x-6">Voir les promos</span>
            </Link>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-2 sm:gap-3">
            {univers.map((u) => (
              <Link
                key={u.slug}
                href={`/boutique?cat=${u.slug}`}
                className="hero-univers group border-l-[3px] border-primary bg-white/5 px-3 py-3 backdrop-blur-sm transition-colors hover:bg-primary sm:px-4"
              >
                <span className="block truncate font-heading text-[11px] font-extrabold uppercase italic text-white sm:text-base">
                  {u.label}
                </span>
                <span className="mt-0.5 hidden text-xs text-white/60 group-hover:text-white/90 sm:block">
                  {u.tagline}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
