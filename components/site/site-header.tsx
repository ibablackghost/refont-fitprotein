'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, ShoppingCart, User, X } from 'lucide-react'
import { Logo } from './logo'
import { SearchBox } from './search-box'
import { categories, categoryChildren } from '@/lib/data'
import { cn } from '@/lib/utils'

const secondaryLinks = [
  { label: 'Marques', href: '/marques' },
  { label: 'À propos', href: '/a-propos' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="overflow-visible bg-white">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center gap-4 px-4">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Logo className="shrink-0" />

        <SearchBox variant="desktop" />

        <div className="ml-auto flex items-center gap-2 md:ml-4">
          <Link
            href="/compte"
            className="flex items-center gap-2 border border-border px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <User className="h-5 w-5" />
            <span className="hidden lg:inline">Compte</span>
          </Link>
          <Link
            href="/panier"
            className="relative flex items-center gap-2 bg-primary px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-ink"
          >
            <span className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white ring-2 ring-white">
                0
              </span>
            </span>
            <span className="hidden lg:inline">Panier</span>
          </Link>
        </div>
      </div>

      <SearchBox variant="mobile" />

      {/* Nav catégories — overflow visible pour ne pas clipper les dropdowns */}
      <div className="relative z-20 hidden bg-ink lg:block">
        <nav className="mx-auto flex min-h-12 max-w-7xl flex-wrap items-center gap-x-1 px-4">
          {categories.map((item) => {
            const children = categoryChildren[item.label]
            const isOpen = openDropdown === item.label

            if (!item.hasChildren || !children?.length) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="shrink-0 px-3 py-3 font-heading text-[13px] font-extrabold uppercase italic tracking-wide text-white/85 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              )
            }

            return (
              <div
                key={item.label}
                className="relative shrink-0"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-3 font-heading text-[13px] font-extrabold uppercase italic tracking-wide transition-colors hover:text-primary',
                    isOpen ? 'text-primary' : 'text-white',
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn('h-3.5 w-3.5 opacity-70 transition-transform', isOpen && 'rotate-180')}
                  />
                </Link>
                {isOpen && (
                  <div className="absolute left-0 top-full z-[100] min-w-[230px] border-t-[3px] border-primary bg-white py-2 shadow-xl">
                    {children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-mist hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                    <Link
                      href={item.href}
                      className="mt-1 block border-t border-border px-4 pb-1 pt-2.5 text-xs font-bold uppercase tracking-wide text-primary hover:text-ink"
                    >
                      Tout voir
                    </Link>
                  </div>
                )}
              </div>
            )
          })}

          <div className="ml-auto flex items-center">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 px-3 py-3 text-[13px] font-semibold text-white/65 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-3">
            {categories.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-3 py-2.5 font-heading text-sm font-extrabold uppercase italic text-ink hover:bg-mist"
                >
                  {item.label}
                  {item.hasChildren ? <ChevronDown className="h-4 w-4 opacity-50" /> : null}
                </Link>
                {item.hasChildren && categoryChildren[item.label] ? (
                  <div className="mb-1 ml-3 border-l-2 border-primary pl-3">
                    {categoryChildren[item.label].map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-2 border-t border-border pt-2">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
