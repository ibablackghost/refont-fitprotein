import { Suspense } from 'react'
import { LoadingOverlay } from '@/components/site/navigation-loader'
import BoutiqueClient from './boutique-client'

export default function BoutiquePage() {
  return (
    <Suspense fallback={<LoadingOverlay label="Ouverture de la boutique…" />}>
      <BoutiqueClient />
    </Suspense>
  )
}
