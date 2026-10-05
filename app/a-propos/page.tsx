import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteShell } from '@/components/site/site-shell'
import { JollofMark } from '@/components/site/logo'
import { INSTAGRAM_URL, WHATSAPP_NUMBER, univers } from '@/lib/data'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Jollof Protéine — compléments alimentaires, équipement fitness et chaussures de sport au Sénégal.',
}

const infos = [
  {
    id: 'livraison',
    title: 'Livraison',
    text: '24 h à Dakar, 48 à 72 h dans les régions. Livraison offerte dès 30 000 FCFA à Dakar, suivi sur WhatsApp jusqu’à la remise en main propre.',
  },
  {
    id: 'paiement',
    title: 'Paiement',
    text: 'Wave, Orange Money ou espèces à la livraison. Pas de surprise : le prix affiché est le prix payé.',
  },
  {
    id: 'pointures',
    title: 'Pointures',
    text: 'Nos chaussures sont proposées du 39 au 45 (pointures EU). Un doute ? Envoie-nous ta longueur de pied sur WhatsApp, on te conseille.',
  },
]

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="relative min-h-[55vh] overflow-hidden bg-ink">
        <img
          src="/jollof/photos/hero-accra.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_30%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-end gap-8 px-4 pb-14 pt-24">
          <span className="jp-line hidden h-48 shrink-0 self-start sm:block" aria-hidden="true" />
          <div>
            <p className="jp-eyebrow text-white/80">À propos</p>
            <h1 className="jp-title mt-4 max-w-3xl text-5xl text-white text-balance sm:text-7xl">
              Jollof <span className="text-primary">Protéine</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/75 text-pretty">
              Une boutique sénégalaise pour celles et ceux qui s&apos;entraînent : compléments,
              équipement et chaussures, choisis avec exigence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="jp-eyebrow text-muted-foreground">Notre mission</p>
            <h2 className="jp-title mt-4 text-3xl text-ink text-balance sm:text-4xl">
              Nourrir ta force, <span className="text-primary">équiper</span> ton ambition
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 text-pretty">
              Comme le jollof réunit tout le monde autour d&apos;un même plat, Jollof Protéine
              réunit tout ce qu&apos;il faut pour progresser : une nutrition sportive authentique,
              du matériel solide pour t&apos;entraîner à la maison ou en salle, et des chaussures
              qui suivent chacun de tes mouvements.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {univers.map((u) => (
                <Link
                  key={u.slug}
                  href={`/boutique?cat=${u.slug}`}
                  className="border-l-[3px] border-primary bg-white px-4 py-3 transition-colors hover:bg-ink hover:text-white"
                >
                  <span className="block font-heading text-base font-extrabold uppercase italic">
                    {u.label}
                  </span>
                  <span className="mt-0.5 block text-xs opacity-60">{u.tagline}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 bg-white p-10">
            <JollofMark variant="stacked" className="h-44 sm:h-52" />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          {infos.map((item) => (
            <div key={item.id} id={item.id} className="scroll-mt-28 border-t-[3px] border-primary pt-5">
              <h3 className="jp-title text-2xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65 text-pretty">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="jp-title text-4xl text-ink sm:text-5xl">
          On se suit <span className="text-primary">?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground text-pretty">
          Arrivages, promos et conseils training : retrouve-nous sur Instagram ou écris-nous sur
          WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex -skew-x-6 bg-primary px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-ink"
          >
            <span className="skew-x-6">@jollofproteine</span>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex -skew-x-6 border-2 border-ink px-7 py-[14px] text-sm font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <span className="skew-x-6">WhatsApp</span>
          </a>
        </div>
      </section>
    </SiteShell>
  )
}
