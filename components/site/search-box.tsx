'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { formatFCFA, searchProducts } from '@/lib/data'
import { cn } from '@/lib/utils'

const HINTS = [
  'Whey protein',
  'Chaussures running',
  'Kettlebell',
  'Créatine',
  'Gainer',
  'Haltères',
  'Shaker',
  'Nike Air Max',
]

function useTypedHint(paused: boolean) {
  const [hint, setHint] = useState('')
  const [hintIndex, setHintIndex] = useState(0)

  useEffect(() => {
    if (paused) return

    const full = HINTS[hintIndex]
    let i = 0
    let deleted = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      if (!deleted) {
        i += 1
        setHint(full.slice(0, i))
        if (i >= full.length) {
          deleted = true
          timer = setTimeout(tick, 1400)
          return
        }
        timer = setTimeout(tick, 70)
        return
      }

      i -= 1
      setHint(full.slice(0, i))
      if (i <= 0) {
        setHintIndex((n) => (n + 1) % HINTS.length)
        return
      }
      timer = setTimeout(tick, 36)
    }

    timer = setTimeout(tick, 280)
    return () => clearTimeout(timer)
  }, [hintIndex, paused])

  return hint
}

export function SearchBox({
  variant = 'desktop',
}: {
  variant?: 'desktop' | 'mobile'
}) {
  const router = useRouter()
  const root = useRef<HTMLFormElement>(null)
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [focused, setFocused] = useState(false)

  const suggestions = useMemo(() => searchProducts(query, 6), [query])
  const showPanel = open && query.trim().length >= 1
  const showHint = !focused && query.length === 0
  const typedHint = useTypedHint(!showHint)

  useEffect(() => {
    setActive(0)
  }, [query])

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    return () => document.removeEventListener('mousedown', onPointer)
  }, [])

  const goToResults = () => {
    const q = query.trim()
    if (!q) return
    setOpen(false)
    router.push(`/boutique?q=${encodeURIComponent(q)}`)
  }

  return (
    <form
      ref={root}
      role="search"
      className={cn(
        'relative',
        variant === 'desktop' ? 'ml-auto hidden max-w-xl flex-1 md:block' : 'w-full',
      )}
      onSubmit={(e) => {
        e.preventDefault()
        if (showPanel && suggestions[active]) {
          router.push(`/produits/${suggestions[active].slug}`)
          setOpen(false)
          return
        }
        goToResults()
      }}
    >
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
        }}
        onFocus={() => {
          setFocused(true)
          setOpen(true)
        }}
        onBlur={() => setFocused(false)}
        onKeyDown={(e) => {
          if (!showPanel) return
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setActive((i) => Math.min(i + 1, Math.max(suggestions.length - 1, 0)))
          }
          if (e.key === 'ArrowUp') {
            e.preventDefault()
            setActive((i) => Math.max(i - 1, 0))
          }
          if (e.key === 'Escape') setOpen(false)
        }}
        placeholder=""
        className={cn(
          'w-full border border-border bg-white text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary',
          variant === 'desktop' ? 'h-11 pl-11 pr-28' : 'h-11 bg-background pl-11 pr-14 focus:bg-white',
        )}
        aria-label="Recherche"
        aria-autocomplete="list"
        aria-expanded={showPanel}
        autoComplete="off"
      />
      {showHint ? (
        <span
          className="pointer-events-none absolute left-11 top-1/2 flex -translate-y-1/2 items-center text-sm text-muted-foreground"
          aria-hidden="true"
        >
          <span className="text-ink/55">{typedHint}</span>
          <span className="search-caret ml-0.5 inline-block h-4 w-[1.5px] bg-primary" />
        </span>
      ) : null}
      {variant === 'desktop' ? (
        <button
          type="submit"
          className="absolute right-1 top-1/2 h-9 -translate-y-1/2 bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-ink"
        >
          Chercher
        </button>
      ) : (
        <button
          type="submit"
          aria-label="Lancer la recherche"
          className="absolute right-1 top-1/2 flex h-9 w-11 -translate-y-1/2 items-center justify-center bg-primary text-white transition-colors active:bg-ink"
        >
          <Search className="h-4 w-4" strokeWidth={2.5} />
        </button>
      )}

      {showPanel ? (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-[120] overflow-hidden border border-border bg-white shadow-[0_16px_40px_rgba(15,23,32,0.12)]">
          {suggestions.length > 0 ? (
            <ul role="listbox">
              {suggestions.map((p, i) => (
                <li key={p.id}>
                  <Link
                    href={`/produits/${p.slug}`}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 transition-colors',
                      i === active ? 'bg-mist' : 'bg-white hover:bg-mist',
                    )}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border border-border bg-white">
                      <img src={p.image} alt="" className={p.fullBleed ? 'h-full w-full object-cover' : 'h-full w-full object-contain p-1'} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[11px] font-bold uppercase tracking-wide text-primary">
                        {p.brand}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-semibold text-ink">
                        {p.name}
                      </span>
                    </span>
                    <span className="shrink-0 text-sm font-bold tabular-nums text-ink">
                      {formatFCFA(p.price)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-5 text-sm text-muted-foreground">
              Aucun produit pour « {query.trim()} »
            </p>
          )}
          <button
            type="button"
            onClick={goToResults}
            className="flex w-full items-center justify-between border-t border-border bg-mist px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide text-primary hover:bg-white"
          >
            Voir tous les résultats
            <span className="normal-case tracking-normal text-muted-foreground">Entrée</span>
          </button>
        </div>
      ) : null}
    </form>
  )
}
