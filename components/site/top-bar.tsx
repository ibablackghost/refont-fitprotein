import { Heart, Phone, Truck } from 'lucide-react'
import Link from 'next/link'
import { INSTAGRAM_URL, PHONE_DISPLAY, WHATSAPP_NUMBER } from '@/lib/data'

export function TopBar() {
  return (
    <div className="bg-ink text-white">
      <div className="relative flex h-10 w-full items-center justify-between gap-4 px-3 text-xs sm:px-4 sm:text-[13px]">
        <a
          href={`tel:+${WHATSAPP_NUMBER}`}
          className="relative z-10 flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          <span className="font-medium">
            <span className="hidden sm:inline">Service client : </span>
            <span className="text-primary">{PHONE_DISPLAY}</span>
          </span>
        </a>

        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
          <div className="pointer-events-auto flex items-center gap-2 text-white/75">
            <Truck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Livraison gratuite dès 30 000 FCFA à Dakar</span>
          </div>
        </div>

        <div className="relative z-10 flex shrink-0 items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-medium transition-colors hover:text-primary sm:inline"
          >
            @jollofproteine
          </a>
          <Link
            href="/favoris"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Heart className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span className="font-medium">Favoris</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
