'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, Calculator } from 'lucide-react'
import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/221783813181"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-5 left-5 z-40 block h-14 w-14 overflow-hidden rounded-full shadow-lg transition-transform hover:scale-105"
    >
      <img src="/whatsapp.svg" alt="" className="h-full w-full object-cover" />
    </a>
  )
}

export function ProteinCalculatorTab() {
  return (
    <Link
      href="/calculateur"
      aria-label="Calculateur de protéines"
      className="fixed left-0 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-2 bg-primary px-2 py-4 text-white shadow-md transition-colors hover:bg-ink md:flex [writing-mode:vertical-rl]"
    >
      <Calculator className="h-4 w-4 rotate-90" />
      <span className="text-xs font-bold uppercase tracking-widest">Protein Calculator</span>
    </Link>
  )
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center bg-ink text-white shadow-lg hover:bg-primary transition-transform hover:scale-105"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
