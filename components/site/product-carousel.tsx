'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProductCard } from './product-card'
import type { Product } from '@/lib/data'

export function ProductCarousel({ products }: { products: Product[] }) {
  const scroller = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="w-[75%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%-0.75rem)]"
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Précédent"
        className="absolute -left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Suivant"
        className="absolute -right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
