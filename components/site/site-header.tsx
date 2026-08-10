'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import { Logo } from './logo'
import { categories, categoryChildren } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="overflow-visible border-b border-border bg-white">
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

        <form
          className="relative ml-auto hidden max-w-xl flex-1 md:flex"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Rechercher un produit, une marque…"
            className="h-11 w-full border border-border bg-white pl-11 pr-28 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            aria-label="Recherche"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 h-9 -translate-y-1/2 bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-ink"
          >
            Chercher
          </button>
        </form>

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
            className="relative flex items-center gap-2 bg-primary px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-ink"
          >
            <span className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sale text-[10px] font-bold text-white">
                0
              </span>
            </span>
            <span className="hidden lg:inline">Panier</span>
          </Link>
        </div>
      </div>

      <form
        className="relative px-4 pb-3 md:hidden"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <Search className="pointer-events-none absolute left-7 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Rechercher…"
          className="h-10 w-full border border-border bg-white pl-11 pr-4 text-sm outline-none focus:border-primary"
          aria-label="Recherche"
        />
      </form>

      {/* Nav catégories — overflow visible pour ne pas clipper les dropdowns */}
      <div className="relative z-20 hidden border-t border-border bg-[#f7f8fa] lg:block">
        <nav className="mx-auto flex min-h-11 max-w-7xl flex-wrap items-center gap-x-0.5 px-4">
          <Link
            href="/marques"
            className="shrink-0 px-3 py-2 text-[13px] font-bold uppercase tracking-wide text-ink transition-colors hover:text-primary"
          >
            Marques
          </Link>

          {categories.map((item) => {
            const children = categoryChildren[item.label]
            const isOpen = openDropdown === item.label

            if (!item.hasChildren || !children?.length) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="shrink-0 px-3 py-2 text-[13px] font-semibold text-ink/85 transition-colors hover:text-primary"
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
                    'flex items-center gap-1 px-3 py-2 text-[13px] font-semibold transition-colors hover:text-primary',
                    isOpen ? 'text-primary' : 'text-ink/85',
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn('h-3.5 w-3.5 opacity-60 transition-transform', isOpen && 'rotate-180')}
                  />
                </Link>
                {isOpen && (
                  <div className="absolute left-0 top-full z-[100] min-w-[220px] border border-border bg-white py-2 shadow-lg">
                    {children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-mist hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-3">
            <Link
              href="/marques"
              className="block px-3 py-2.5 text-sm font-bold uppercase text-ink hover:bg-mist"
            >
              Marques
            </Link>
            {categories.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist"
                >
                  {item.label}
                  {item.hasChildren ? <ChevronDown className="h-4 w-4 opacity-50" /> : null}
                </Link>
                {item.hasChildren && categoryChildren[item.label] ? (
                  <div className="mb-1 ml-3 border-l border-border pl-3">
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
          </nav>
        </div>
      )}
    </header>
  )
}
