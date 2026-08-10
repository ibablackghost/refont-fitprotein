'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { FitProMark } from './logo'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

const columns = [
  {
    title: 'Boutique',
    links: [
      { label: 'Tous les produits', href: '/boutique' },
      { label: 'Créatine', href: '/boutique?cat=creatine' },
      { label: 'Whey', href: '/boutique?cat=whey' },
      { label: 'Prise de masse', href: '/boutique?cat=prise-de-masse' },
      { label: 'Perte de poids', href: '/boutique?cat=perte-de-poids' },
    ],
  },
  {
    title: 'Aide',
    links: [
      { label: 'Livraison & retours', href: '/a-propos#livraison' },
      { label: 'Modes de paiement', href: '/a-propos#paiement' },
      { label: 'Contact WhatsApp', href: 'https://wa.me/221783813181' },
      { label: 'FAQ', href: '/a-propos#faq' },
    ],
  },
  {
    title: 'À propos',
    links: [
      { label: 'Notre histoire', href: '/a-propos' },
      { label: 'Partenariat amka', href: '/a-propos#partenariat' },
      { label: 'Nos marques', href: '/marques' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-ink text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-heading text-2xl font-extrabold">Restez au top de votre forme</h3>
            <p className="mt-1 text-sm text-white/65">
              Offres exclusives et conseils nutrition par email.
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
                placeholder="Votre adresse email"
                aria-label="Adresse email"
                className="h-12 w-full border border-white/15 bg-white/5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-lime"
              />
            </div>
            <button
              type="submit"
              className="flex h-12 items-center gap-2 rounded-xl bg-primary px-5 font-semibold lowercase text-white transition-colors hover:bg-white hover:text-primary"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">s&apos;inscrire</span>
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <FitProMark onDark className="h-16 sm:h-[4.5rem]" />
          <p className="mt-4 max-w-sm text-sm text-white/65 text-pretty">
            Boutique partenaire d&apos;
            <a
              href="https://www.amkanutrition.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand underline-offset-2 hover:underline"
            >
              AMKA Nutrition
            </a>
            {' '}
            au Sénégal. Premium sports nutrition for champions.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-white/65">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> +221 78 381 31 81
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Dakar, Sénégal
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
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

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Fit &amp; Protein × AMKA Nutrition. Tous droits réservés.</p>
          <p>Conçu à Dakar</p>
        </div>
      </div>
    </footer>
  )
}
