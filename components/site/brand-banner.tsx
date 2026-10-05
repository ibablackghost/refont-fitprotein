import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { INSTAGRAM_URL } from '@/lib/data'

export function BrandBanner() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <img
        src="/jollof/photos/banner-gym.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-multiply"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[auto_1fr_auto] lg:py-20">
        <div className="hidden flex-col items-center gap-5 lg:flex">
          <img src="/jollof/mark-on-orange.webp" alt="" aria-hidden="true" className="h-24 w-auto" />
          <span className="h-40 w-[3px] rounded-full bg-gradient-to-b from-white to-transparent" />
        </div>

        <div>
          <p className="jp-eyebrow text-white/85 [&::before]:bg-white">L&apos;esprit Jollof</p>
          <h2 className="jp-title mt-4 text-4xl text-white text-balance sm:text-6xl">
            L&apos;énergie du <span className="text-ink">Sénégal</span>, la force du sport.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 text-pretty">
            Jollof Protéine, c&apos;est une sélection exigeante de compléments, d&apos;équipement et
            de chaussures pour celles et ceux qui s&apos;entraînent pour de vrai. Suis nos
            arrivages et nos conseils sur Instagram.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex -skew-x-6 items-center justify-center gap-2 bg-ink px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink"
          >
            <span className="skew-x-6">@jollofproteine</span>
          </a>
          <Link
            href="/a-propos"
            className="inline-flex -skew-x-6 items-center justify-center gap-2 border-2 border-white px-7 py-[14px] text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-primary"
          >
            <span className="inline-flex skew-x-6 items-center gap-2">
              Notre histoire
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
