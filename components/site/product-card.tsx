'use client'

import Link from 'next/link'
import { Plus } from 'lucide-react'
import { formatFCFA, type Product } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ProductCard({
  product,
  className,
}: {
  product: Product
  className?: string
}) {
  const isAmka = product.brand.toLowerCase().includes('amka')

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden border border-border bg-white transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(15,23,32,0.08)]',
        className,
      )}
    >
      <Link
        href={`/produits/${product.slug}`}
        className="relative block overflow-hidden bg-white"
      >
        <div className="absolute left-0 top-0 z-10 flex">
          {product.discount ? (
            <span className="bg-sale px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              -{product.discount}%
            </span>
          ) : null}
          {product.isNew ? (
            <span className="bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              New
            </span>
          ) : null}
          {product.isTrending && !product.isNew ? (
            <span className="bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Hot
            </span>
          ) : null}
        </div>

        {isAmka ? (
          <span className="absolute right-2 top-2 z-10 bg-sand px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-sand-foreground">
            AMKA
          </span>
        ) : null}

        <div className="flex aspect-[4/5] items-center justify-center border-b border-border bg-white p-3 sm:p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center bg-ink/0 py-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:bg-ink/80 group-hover:opacity-100">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
            Voir le produit
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col bg-white px-3.5 pb-4 pt-3.5">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            {product.brand}
          </p>
          <p className="shrink-0 text-[10px] uppercase tracking-wide text-muted-foreground">
            {product.category}
          </p>
        </div>

        <h3 className="mt-2 line-clamp-2 min-h-[2.6em] text-[13px] font-semibold leading-snug text-ink sm:text-sm">
          <Link href={`/produits/${product.slug}`} className="transition-colors hover:text-primary">
            {product.name}
          </Link>
        </h3>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div className="min-w-0">
            {product.oldPrice ? (
              <p className="text-[11px] tabular-nums text-muted-foreground line-through">
                {formatFCFA(product.oldPrice)}
              </p>
            ) : null}
            <p className="truncate text-sm font-bold tabular-nums tracking-tight text-ink sm:text-[15px]">
              {formatFCFA(product.price)}
            </p>
          </div>

          <button
            type="button"
            aria-label={`Ajouter ${product.name} au panier`}
            className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-white transition-colors hover:bg-ink"
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </article>
  )
}
