import { Heart, Phone, Truck } from 'lucide-react'
import Link from 'next/link'

export function TopBar() {
  return (
    <div className="bg-ink text-white">
      <div className="relative flex h-10 w-full items-center justify-between gap-4 px-3 text-xs sm:px-4 sm:text-[13px]">
        <a
          href="tel:+221783813181"
          className="relative z-10 flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Phone className="h-3.5 w-3.5 text-[#7eb8f0]" aria-hidden="true" />
          <span className="font-medium">
            Service commercial : <span className="text-[#7eb8f0]">+221 78 381 31 81</span>
          </span>
        </a>

        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
          <div className="pointer-events-auto flex items-center gap-2 text-white/75">
            <Truck className="h-3.5 w-3.5 text-[#7eb8f0]" aria-hidden="true" />
            <span>Livraison gratuite dès 30 000 FCFA</span>
          </div>
        </div>

        <Link
          href="/favoris"
          className="relative z-10 flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Heart className="h-3.5 w-3.5 text-[#7eb8f0]" aria-hidden="true" />
          <span className="font-medium">Favoris</span>
        </Link>
      </div>
    </div>
  )
}
