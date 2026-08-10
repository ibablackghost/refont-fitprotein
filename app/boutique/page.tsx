import { Suspense } from 'react'
import BoutiqueClient from './boutique-client'

export default function BoutiquePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center text-sm text-muted-foreground">
          Chargement de la boutique…
        </div>
      }
    >
      <BoutiqueClient />
    </Suspense>
  )
}
