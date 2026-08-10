import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { SiteShell } from '@/components/site/site-shell'
import { ProductCard } from '@/components/site/product-card'
import { ProductGallery, ProductActions } from '@/components/site/product-purchase'
import {
  formatFCFA,
  getProductBySlug,
  getRelatedProducts,
  products,
} from '@/lib/data'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Produit introuvable' }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const gallery = product.gallery?.length ? product.gallery : [product.image]
  const related = getRelatedProducts(product)

  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Link
          href="/boutique"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour boutique
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <ProductGallery product={product} gallery={gallery} />

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {product.brand} · {product.category}
            </p>
            <h1 className="mt-2 font-heading text-3xl font-extrabold text-primary text-balance sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-end gap-3">
              {product.oldPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatFCFA(product.oldPrice)}
                </span>
              )}
              <span className="font-heading text-3xl font-extrabold text-primary">
                {formatFCFA(product.price)}
              </span>
              {product.discount ? (
                <span className="bg-sale px-2 py-1 text-xs font-bold text-sale-foreground">
                  -{product.discount}%
                </span>
              ) : null}
            </div>

            <p className="mt-6 text-base leading-relaxed text-foreground/80 text-pretty">
              {product.description}
            </p>

            <ul className="mt-6 space-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="flex h-5 w-5 items-center justify-center bg-lime text-[10px] font-bold text-lime-foreground">
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              {product.weight && (
                <div className="border border-border bg-card px-3 py-2">
                  <span className="text-muted-foreground">Contenance · </span>
                  <span className="font-semibold">{product.weight}</span>
                </div>
              )}
              {product.flavor && (
                <div className="border border-border bg-card px-3 py-2">
                  <span className="text-muted-foreground">Saveur · </span>
                  <span className="font-semibold">{product.flavor}</span>
                </div>
              )}
            </div>

            <ProductActions product={product} />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-heading text-2xl font-extrabold text-primary">Vous aimerez aussi</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </SiteShell>
  )
}
