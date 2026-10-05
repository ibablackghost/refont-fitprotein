'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { JollofMark } from './logo'
import { INSTAGRAM_URL, PHONE_DISPLAY, WHATSAPP_NUMBER } from '@/lib/data'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.87 9.87 0 0 0 12.04 2Zm5.8 14.05c-.24.68-1.42 1.3-1.96 1.38-.5.07-1.13.1-1.82-.12a16.6 16.6 0 0 1-1.65-.61c-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3s.75-2.13 1.01-2.42c.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.14.31-.29.48l-.43.5c-.14.15-.29.3-.12.6.17.29.75 1.24 1.61 2 1.1.98 2.04 1.29 2.33 1.43.29.15.46.12.63-.07.17-.2.72-.84.92-1.13.19-.29.38-.24.65-.14.26.1 1.68.79 1.97.93.29.15.48.22.55.34.07.12.07.7-.17 1.38Z" />
    </svg>
  )
}

const columns = [
  {
    title: 'Boutique',
    links: [
      { label: 'Tous les produits', href: '/boutique' },
      { label: 'Compléments', href: '/boutique?cat=complements' },
      { label: 'Fitness & équipement', href: '/boutique?cat=fitness' },
      { label: 'Chaussures', href: '/boutique?cat=chaussures' },
      { label: 'Promos', href: '/boutique?promo=1' },
    ],
  },
  {
    title: 'Aide',
    links: [
      { label: 'Livraison & retours', href: '/a-propos#livraison' },
      { label: 'Modes de paiement', href: '/a-propos#paiement' },
      { label: 'Guide des pointures', href: '/a-propos#pointures' },
      { label: 'Calculateur de protéines', href: '/calculateur' },
    ],
  },
  {
    title: 'Jollof Protéine',
    links: [
      { label: 'Notre histoire', href: '/a-propos' },
      { label: 'Nos marques', href: '/marques' },
      { label: 'Contact WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}` },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-8 overflow-hidden bg-ink text-white">
      <img
        src="/jollof/mark-light.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 w-[420px] max-w-[70vw] opacity-[0.04]"
      />

      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="jp-title text-2xl sm:text-3xl">
              Reste <span className="text-primary">au top</span>
            </h3>
            <p className="mt-2 text-sm text-white/65">
              Nouveaux arrivages, promos et conseils training par email.
            </p>
          </div>
          <form
            className="flex w-full max-w-md items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
              <input
                type="email"
                required
                placeholder="Ton adresse email"
                aria-label="Adresse email"
                className="h-12 w-full border border-white/15 bg-white/5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="flex h-12 items-center gap-2 bg-primary px-5 text-sm font-bold uppercase text-white transition-colors hover:bg-white hover:text-ink"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">S&apos;inscrire</span>
            </button>
          </form>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <JollofMark onDark className="h-12 sm:h-14" />
          <p className="mt-5 max-w-sm text-sm text-white/65 text-pretty">
            Compléments alimentaires, équipement fitness et chaussures de sport. Tout pour
            s&apos;entraîner et performer, livré au Sénégal.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-white/65">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Dakar, Sénégal
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @jollofproteine"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-primary hover:bg-primary"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-primary hover:bg-primary"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading text-sm font-extrabold uppercase italic tracking-wide text-primary">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Jollof Protéine. Tous droits réservés.</p>
          <p>Fait à Dakar</p>
        </div>
      </div>
    </footer>
  )
}
