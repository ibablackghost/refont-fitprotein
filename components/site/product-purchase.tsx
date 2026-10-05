'use client'

import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { WHATSAPP_NUMBER, type Product } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ProductGallery({
  product,
  gallery,
}: {
  product: Product
  gallery: string[]
}) {
  const [activeImage, setActiveImage] = useState(0)
  const fit = product.fullBleed ? 'object-cover' : 'object-contain'

  return (
    <div>
      <div
        className={cn(
          'flex aspect-square items-center justify-center overflow-hidden bg-white',
          !product.fullBleed && 'p-4 sm:p-6',
        )}
      >
        <img src={gallery[activeImage]} alt={product.name} className={cn('h-full w-full', fit)} />
      </div>
      {gallery.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {gallery.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActiveImage(i)}
              className={cn(
                'aspect-square overflow-hidden border-2 bg-white',
                !product.fullBleed && 'p-1.5',
                activeImage === i ? 'border-primary' : 'border-transparent',
              )}
            >
              <img src={src} alt="" className={cn('h-full w-full', fit)} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function ProductActions({ product }: { product: Product }) {
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState<string | null>(null)
  const needsSize = !!product.sizes?.length
  const missingSize = needsSize && !size

  const message = `Bonjour Jollof Protéine, je suis intéressé par : ${product.name}${
    size ? ` (pointure ${size})` : ''
  } x${qty}`

  return (
    <div className="mt-8">
      {needsSize ? (
        <fieldset className="mb-6">
          <legend className="font-heading text-sm font-extrabold uppercase italic text-ink">
            Pointure {size ? <span className="text-primary">· {size}</span> : null}
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes!.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={cn(
                  'h-11 min-w-12 border px-3 text-sm font-bold transition-colors',
                  size === s
                    ? 'border-ink bg-ink text-white'
                    : 'border-border bg-white text-ink hover:border-primary hover:text-primary',
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center border border-border bg-white">
          <button
            type="button"
            aria-label="Diminuer"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-12 w-12 items-center justify-center hover:bg-mist"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center font-bold">{qty}</span>
          <button
            type="button"
            aria-label="Augmenter"
            onClick={() => setQty((q) => q + 1)}
            className="flex h-12 w-12 items-center justify-center hover:bg-mist"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button
          type="button"
          disabled={missingSize}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 bg-primary px-6 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-50 sm:min-w-[220px] sm:flex-none"
        >
          <ShoppingCart className="h-4 w-4" />
          {missingSize ? 'Choisis ta pointure' : 'Ajouter au panier'}
        </button>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center border-2 border-ink px-5 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Commander via WhatsApp
        </a>
      </div>
    </div>
  )
}
