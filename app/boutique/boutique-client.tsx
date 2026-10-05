'use client'

import { useCallback, useEffect, useMemo, useState, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  ChevronDown,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react'
import { SiteShell } from '@/components/site/site-shell'
import { ProductCard } from '@/components/site/product-card'
import {
  allCategories,
  formatFCFA,
  getProductsByCategory,
  products,
  type Product,
} from '@/lib/data'
import { cn } from '@/lib/utils'

type SortKey = 'pertinence' | 'prix-asc' | 'prix-desc' | 'nouveautes' | 'promo' | 'nom'

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'pertinence', label: 'Pertinence' },
  { value: 'nouveautes', label: 'Nouveautés' },
  { value: 'promo', label: 'Meilleures promos' },
  { value: 'prix-asc', label: 'Prix croissant' },
  { value: 'prix-desc', label: 'Prix décroissant' },
  { value: 'nom', label: 'Nom A → Z' },
]

const PRICE_MIN = 0
const PRICE_MAX = 80000

const categoryFilters: { label: string; slug: string; sub?: boolean }[] = [
  { label: 'Tous les produits', slug: 'all' },
  ...allCategories,
]

function uniqueBrands() {
  return Array.from(new Set(products.map((p) => p.brand))).sort((a, b) =>
    a.localeCompare(b, 'fr'),
  )
}

function parseList(value: string | null) {
  if (!value) return [] as string[]
  return value
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean)
}

function sortProducts(list: Product[], sort: SortKey) {
  const next = [...list]
  switch (sort) {
    case 'prix-asc':
      return next.sort((a, b) => a.price - b.price)
    case 'prix-desc':
      return next.sort((a, b) => b.price - a.price)
    case 'nouveautes':
      return next.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew))
    case 'promo':
      return next.sort((a, b) => (b.discount || 0) - (a.discount || 0))
    case 'nom':
      return next.sort((a, b) => a.name.localeCompare(b.name, 'fr'))
    default:
      return next.sort(
        (a, b) =>
          Number(!!b.isTrending) - Number(!!a.isTrending) ||
          Number(!!b.isNew) - Number(!!a.isNew),
      )
  }
}

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border py-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-bold uppercase tracking-[0.14em] text-ink">{title}</span>
        <ChevronDown
          className={cn('h-4 w-4 text-muted-foreground transition-transform', open && 'rotate-180')}
        />
      </button>
      {open ? <div className="mt-3 space-y-1">{children}</div> : null}
    </div>
  )
}

function FiltersPanel({
  category,
  brandsSelected,
  brandOptions,
  categoryCounts,
  brandCounts,
  minPrice,
  maxPrice,
  onlyNew,
  onlyHot,
  onlyPromo,
  onCategory,
  onToggleBrand,
  onMinPrice,
  onMaxPrice,
  onOnlyNew,
  onOnlyHot,
  onOnlyPromo,
  onReset,
}: {
  category: string
  brandsSelected: string[]
  brandOptions: string[]
  categoryCounts: Record<string, number>
  brandCounts: Record<string, number>
  minPrice: number
  maxPrice: number
  onlyNew: boolean
  onlyHot: boolean
  onlyPromo: boolean
  onCategory: (slug: string) => void
  onToggleBrand: (brand: string) => void
  onMinPrice: (v: number) => void
  onMaxPrice: (v: number) => void
  onOnlyNew: (v: boolean) => void
  onOnlyHot: (v: boolean) => void
  onOnlyPromo: (v: boolean) => void
  onReset: () => void
}) {
  return (
    <aside className="bg-white">
      <div className="mb-2 flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm font-bold text-ink">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          Filtres
        </p>
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-semibold text-primary underline-offset-2 hover:underline"
        >
          Réinitialiser
        </button>
      </div>

      <FilterSection title="Catégories">
        {categoryFilters.map((f) => {
          const count = f.slug === 'all' ? products.length : categoryCounts[f.slug] || 0
          return (
            <button
              key={f.slug}
              type="button"
              onClick={() => onCategory(f.slug)}
              className={cn(
                'flex w-full items-center justify-between py-2 pr-2 text-left text-sm transition-colors',
                f.sub ? 'pl-5' : 'pl-2 font-semibold',
                category === f.slug
                  ? 'bg-primary text-white'
                  : 'text-ink/80 hover:bg-mist hover:text-primary',
              )}
            >
              <span className="font-medium">{f.label}</span>
              <span
                className={cn(
                  'tabular-nums text-xs',
                  category === f.slug ? 'text-white/80' : 'text-muted-foreground',
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </FilterSection>

      <FilterSection title="Marques">
        {brandOptions.map((brand) => {
          const checked = brandsSelected.includes(brand)
          return (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-2.5 px-2 py-2 text-sm text-ink/85 hover:bg-mist"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggleBrand(brand)}
                className="h-4 w-4 accent-primary"
              />
              <span className="flex-1 font-medium">{brand}</span>
              <span className="text-xs tabular-nums text-muted-foreground">
                {brandCounts[brand] || 0}
              </span>
            </label>
          )
        })}
      </FilterSection>

      <FilterSection title="Prix (FCFA)">
        <div className="space-y-3 px-1 pt-1">
          <div className="grid grid-cols-2 gap-2">
            <label className="block text-xs text-muted-foreground">
              Min
              <input
                type="number"
                min={PRICE_MIN}
                max={maxPrice}
                step={500}
                value={minPrice}
                onChange={(e) => onMinPrice(Number(e.target.value) || 0)}
                className="mt-1 h-10 w-full border border-border bg-white px-2 text-sm text-ink outline-none focus:border-primary"
              />
            </label>
            <label className="block text-xs text-muted-foreground">
              Max
              <input
                type="number"
                min={minPrice}
                max={PRICE_MAX}
                step={500}
                value={maxPrice}
                onChange={(e) => onMaxPrice(Number(e.target.value) || PRICE_MAX)}
                className="mt-1 h-10 w-full border border-border bg-white px-2 text-sm text-ink outline-none focus:border-primary"
              />
            </label>
          </div>
          <input
            type="range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={500}
            value={maxPrice}
            onChange={(e) => onMaxPrice(Number(e.target.value))}
            className="w-full accent-primary"
            aria-label="Prix maximum"
          />
          <p className="text-xs text-muted-foreground">
            {formatFCFA(minPrice)} — {formatFCFA(maxPrice)}
          </p>
        </div>
      </FilterSection>

      <FilterSection title="Disponibilité">
        <label className="flex cursor-pointer items-center gap-2.5 px-2 py-2 text-sm hover:bg-mist">
          <input
            type="checkbox"
            checked={onlyPromo}
            onChange={(e) => onOnlyPromo(e.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          <span className="font-medium">En promotion</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2.5 px-2 py-2 text-sm hover:bg-mist">
          <input
            type="checkbox"
            checked={onlyNew}
            onChange={(e) => onOnlyNew(e.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          <span className="font-medium">Nouveautés</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2.5 px-2 py-2 text-sm hover:bg-mist">
          <input
            type="checkbox"
            checked={onlyHot}
            onChange={(e) => onOnlyHot(e.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          <span className="font-medium">Tendances</span>
        </label>
      </FilterSection>
    </aside>
  )
}

export default function BoutiqueClient() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [, startTransition] = useTransition()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState(searchParams.get('cat') || 'all')
  const [brandsSelected, setBrandsSelected] = useState<string[]>(
    parseList(searchParams.get('brand')),
  )
  const [sort, setSort] = useState<SortKey>(
    (searchParams.get('sort') as SortKey) || 'pertinence',
  )
  const [minPrice, setMinPrice] = useState(Number(searchParams.get('min')) || PRICE_MIN)
  const [maxPrice, setMaxPrice] = useState(Number(searchParams.get('max')) || PRICE_MAX)
  const [onlyNew, setOnlyNew] = useState(searchParams.get('new') === '1')
  const [onlyHot, setOnlyHot] = useState(searchParams.get('hot') === '1')
  const [onlyPromo, setOnlyPromo] = useState(searchParams.get('promo') === '1')

  useEffect(() => {
    setQuery(searchParams.get('q') || '')
    setCategory(searchParams.get('cat') || 'all')
    setBrandsSelected(parseList(searchParams.get('brand')))
    setSort((searchParams.get('sort') as SortKey) || 'pertinence')
    setMinPrice(Number(searchParams.get('min')) || PRICE_MIN)
    setMaxPrice(Number(searchParams.get('max')) || PRICE_MAX)
    setOnlyNew(searchParams.get('new') === '1')
    setOnlyHot(searchParams.get('hot') === '1')
    setOnlyPromo(searchParams.get('promo') === '1')
  }, [searchParams])

  const brandOptions = useMemo(() => uniqueBrands(), [])

  const syncUrl = useCallback(
    (next: {
      q?: string
      cat?: string
      brand?: string[]
      sort?: SortKey
      min?: number
      max?: number
      onlyNew?: boolean
      onlyHot?: boolean
      onlyPromo?: boolean
    }) => {
      const params = new URLSearchParams()
      const q = next.q ?? query
      const cat = next.cat ?? category
      const brand = next.brand ?? brandsSelected
      const s = next.sort ?? sort
      const min = next.min ?? minPrice
      const max = next.max ?? maxPrice
      const n = next.onlyNew ?? onlyNew
      const h = next.onlyHot ?? onlyHot
      const p = next.onlyPromo ?? onlyPromo

      if (q.trim()) params.set('q', q.trim())
      if (cat && cat !== 'all') params.set('cat', cat)
      if (brand.length) params.set('brand', brand.join(','))
      if (s && s !== 'pertinence') params.set('sort', s)
      if (min > PRICE_MIN) params.set('min', String(min))
      if (max < PRICE_MAX) params.set('max', String(max))
      if (n) params.set('new', '1')
      if (h) params.set('hot', '1')
      if (p) params.set('promo', '1')

      const qs = params.toString()
      startTransition(() => {
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
      })
    },
    [
      brandsSelected,
      category,
      maxPrice,
      minPrice,
      onlyHot,
      onlyNew,
      onlyPromo,
      pathname,
      query,
      router,
      sort,
    ],
  )

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const c of allCategories) {
      counts[c.slug] = getProductsByCategory(c.slug).length
    }
    return counts
  }, [])

  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const p of products) {
      counts[p.brand] = (counts[p.brand] || 0) + 1
    }
    return counts
  }, [])

  const filtered = useMemo(() => {
    let list =
      category === 'all' ? [...products] : getProductsByCategory(category)

    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.highlights.some((h) => h.toLowerCase().includes(q)),
      )
    }

    if (brandsSelected.length) {
      list = list.filter((p) => brandsSelected.includes(p.brand))
    }

    list = list.filter((p) => p.price >= minPrice && p.price <= maxPrice)

    if (onlyNew) list = list.filter((p) => p.isNew)
    if (onlyHot) list = list.filter((p) => p.isTrending)
    if (onlyPromo) list = list.filter((p) => !!p.discount || !!p.oldPrice)

    return sortProducts(list, sort)
  }, [
    brandsSelected,
    category,
    maxPrice,
    minPrice,
    onlyHot,
    onlyNew,
    onlyPromo,
    query,
    sort,
  ])

  const activeChips = useMemo(() => {
    const chips: { key: string; label: string; clear: () => void }[] = []

    if (category !== 'all') {
      const label = categoryFilters.find((c) => c.slug === category)?.label || category
      chips.push({
        key: 'cat',
        label,
        clear: () => {
          setCategory('all')
          syncUrl({ cat: 'all' })
        },
      })
    }

    for (const brand of brandsSelected) {
      chips.push({
        key: `brand-${brand}`,
        label: brand,
        clear: () => {
          const next = brandsSelected.filter((b) => b !== brand)
          setBrandsSelected(next)
          syncUrl({ brand: next })
        },
      })
    }

    if (query.trim()) {
      chips.push({
        key: 'q',
        label: `“${query.trim()}”`,
        clear: () => {
          setQuery('')
          syncUrl({ q: '' })
        },
      })
    }

    if (minPrice > PRICE_MIN || maxPrice < PRICE_MAX) {
      chips.push({
        key: 'price',
        label: `${formatFCFA(minPrice)} – ${formatFCFA(maxPrice)}`,
        clear: () => {
          setMinPrice(PRICE_MIN)
          setMaxPrice(PRICE_MAX)
          syncUrl({ min: PRICE_MIN, max: PRICE_MAX })
        },
      })
    }

    if (onlyPromo) {
      chips.push({
        key: 'promo',
        label: 'Promo',
        clear: () => {
          setOnlyPromo(false)
          syncUrl({ onlyPromo: false })
        },
      })
    }
    if (onlyNew) {
      chips.push({
        key: 'new',
        label: 'Nouveautés',
        clear: () => {
          setOnlyNew(false)
          syncUrl({ onlyNew: false })
        },
      })
    }
    if (onlyHot) {
      chips.push({
        key: 'hot',
        label: 'Tendances',
        clear: () => {
          setOnlyHot(false)
          syncUrl({ onlyHot: false })
        },
      })
    }

    return chips
  }, [
    brandsSelected,
    category,
    maxPrice,
    minPrice,
    onlyHot,
    onlyNew,
    onlyPromo,
    query,
    syncUrl,
  ])

  const resetAll = () => {
    setQuery('')
    setCategory('all')
    setBrandsSelected([])
    setSort('pertinence')
    setMinPrice(PRICE_MIN)
    setMaxPrice(PRICE_MAX)
    setOnlyNew(false)
    setOnlyHot(false)
    setOnlyPromo(false)
    startTransition(() => {
      router.replace(pathname, { scroll: false })
    })
  }

  const filterProps = {
    category,
    brandsSelected,
    brandOptions,
    categoryCounts,
    brandCounts,
    minPrice,
    maxPrice,
    onlyNew,
    onlyHot,
    onlyPromo,
    onCategory: (slug: string) => {
      setCategory(slug)
      syncUrl({ cat: slug })
      setMobileOpen(false)
    },
    onToggleBrand: (brand: string) => {
      const next = brandsSelected.includes(brand)
        ? brandsSelected.filter((b) => b !== brand)
        : [...brandsSelected, brand]
      setBrandsSelected(next)
      syncUrl({ brand: next })
    },
    onMinPrice: (v: number) => {
      const next = Math.min(v, maxPrice)
      setMinPrice(next)
      syncUrl({ min: next })
    },
    onMaxPrice: (v: number) => {
      const next = Math.max(v, minPrice)
      setMaxPrice(next)
      syncUrl({ max: next })
    },
    onOnlyNew: (v: boolean) => {
      setOnlyNew(v)
      syncUrl({ onlyNew: v })
    },
    onOnlyHot: (v: boolean) => {
      setOnlyHot(v)
      syncUrl({ onlyHot: v })
    },
    onOnlyPromo: (v: boolean) => {
      setOnlyPromo(v)
      syncUrl({ onlyPromo: v })
    },
    onReset: resetAll,
  }

  return (
    <SiteShell>
      <section className="relative z-0 overflow-hidden bg-ink">
        <img
          src="/jollof/photos/boutique-sprint.webp"
          alt=""
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <p className="jp-eyebrow text-primary">Catalogue</p>
          <h1 className="jp-title mt-3 text-4xl text-white text-balance sm:text-6xl">
            La <span className="text-primary">boutique</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/70 text-pretty sm:text-base">
            Compléments alimentaires, équipement fitness et chaussures de sport — filtre par
            univers, marque ou budget. Livraison partout au Sénégal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <form
            className="relative w-full max-w-xl"
            role="search"
            onSubmit={(e) => {
              e.preventDefault()
              syncUrl({ q: query })
            }}
          >
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={() => syncUrl({ q: query })}
              placeholder="Rechercher un produit, une marque…"
              className="h-11 w-full border border-border bg-white pl-10 pr-4 text-sm outline-none focus:border-primary"
              aria-label="Rechercher dans la boutique"
            />
          </form>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-11 items-center gap-2 border border-border bg-white px-4 text-sm font-semibold text-ink lg:hidden"
            >
              <Filter className="h-4 w-4" />
              Filtres
              {activeChips.length > 0 ? (
                <span className="bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {activeChips.length}
                </span>
              ) : null}
            </button>

            <label className="flex h-11 items-center gap-2 border border-border bg-white px-3 text-sm">
              <span className="hidden text-muted-foreground sm:inline">Trier</span>
              <select
                value={sort}
                onChange={(e) => {
                  const value = e.target.value as SortKey
                  setSort(value)
                  syncUrl({ sort: value })
                }}
                className="bg-transparent font-semibold text-ink outline-none"
                aria-label="Trier les produits"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {activeChips.length > 0 ? (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {activeChips.map((chip) => (
              <button
                key={chip.key}
                type="button"
                onClick={chip.clear}
                className="inline-flex items-center gap-1.5 border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                {chip.label}
                <X className="h-3.5 w-3.5" />
              </button>
            ))}
            <button
              type="button"
              onClick={resetAll}
              className="text-xs font-semibold text-primary underline-offset-2 hover:underline"
            >
              Tout effacer
            </button>
          </div>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <div className="sticky top-28 border border-border bg-white p-4">
              <FiltersPanel {...filterProps} />
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-end justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-ink">{filtered.length}</span> produit
                  {filtered.length > 1 ? 's' : ''}
                  {category !== 'all'
                    ? ` · ${categoryFilters.find((c) => c.slug === category)?.label || ''}`
                    : ''}
                </p>
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-border bg-white py-20 text-center">
                <p className="font-heading text-lg font-bold text-ink">Aucun produit trouvé</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Modifie tes filtres ou réinitialise la recherche.
                </p>
                <button
                  type="button"
                  onClick={resetAll}
                  className="mt-5 inline-flex bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[120] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/50"
            aria-label="Fermer les filtres"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[min(100%,340px)] flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="font-heading text-base font-bold text-ink">Filtres</p>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-ink"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 pb-8">
              <FiltersPanel {...filterProps} />
            </div>
            <div className="border-t border-border p-4">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-primary py-3 text-sm font-bold text-white hover:bg-ink"
              >
                Voir {filtered.length} produit{filtered.length > 1 ? 's' : ''}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </SiteShell>
  )
}
