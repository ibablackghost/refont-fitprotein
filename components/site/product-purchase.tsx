'use client'

import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import type { Product } from '@/lib/data'

export function ProductGallery({
  product,
  gallery,
}: {
  product: Product
  gallery: string[]
}) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div>
      <div className="flex aspect-square items-center justify-center overflow-hidden border border-border bg-white p-4 sm:p-6">
        <img
          src={gallery[activeImage]}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>
      {gallery.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {gallery.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActiveImage(i)}
              className={`aspect-square overflow-hidden border-2 bg-white p-1.5 ${
                activeImage === i ? 'border-primary' : 'border-border'
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function ProductActions({ product }: { product: Product }) {
  const [qty, setQty] = useState(1)

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <div className="flex items-center border border-border">
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
        className="inline-flex h-12 flex-1 items-center justify-center gap-2 bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-ink sm:flex-none sm:min-w-[220px]"
      >
        <ShoppingCart className="h-4 w-4" />
        Ajouter au panier
      </button>
      <a
        href={`https://wa.me/221783813181?text=${encodeURIComponent(
          `Bonjour, je suis intéressé par : ${product.name} (x${qty})`,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center justify-center border border-border px-5 text-sm font-semibold transition-colors hover:border-primary"
      >
        Commander via WhatsApp
      </a>
    </div>
  )
}
