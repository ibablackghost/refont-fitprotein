'use client'

import { useCallback, useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function NavigationLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [visible, setVisible] = useState(false)

  const hide = useCallback(() => setVisible(false), [])

  useEffect(() => {
    hide()
  }, [pathname, searchParams, hide])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return
      if (event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return

      try {
        const url = new URL(href, window.location.href)
        if (url.origin !== window.location.origin) return
        const next = `${url.pathname}${url.search}`
        const current = `${window.location.pathname}${window.location.search}`
        if (next === current) return
        setVisible(true)
      } catch {
        // ignore
      }
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  if (!visible) return null

  return <LoadingOverlay label="Chargement…" />
}

export function LoadingOverlay({ label = 'Chargement…' }: { label?: string }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0f1720]/50 backdrop-blur-[2px]"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="loader-ring absolute inset-0 rounded-full border-2 border-white/20" />
          <span className="loader-ring-spin absolute inset-1 rounded-full border-2 border-transparent border-t-white border-r-white/40" />
          <span className="loader-glow absolute inset-3 rounded-full bg-primary/30" />
          <img
            src="/brand/fit-pro-logo-on-dark.webp"
            alt=""
            className="loader-logo relative z-[1] h-12 w-auto object-contain"
            aria-hidden="true"
          />
        </div>
        <p className="font-heading text-sm font-bold tracking-wide text-white">{label}</p>
        <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
          <span className="loader-dot h-1.5 w-1.5 rounded-full bg-white" />
          <span className="loader-dot loader-dot-2 h-1.5 w-1.5 rounded-full bg-white" />
          <span className="loader-dot loader-dot-3 h-1.5 w-1.5 rounded-full bg-sand" />
        </div>
      </div>
      <span className="sr-only">{label}</span>
    </div>
  )
}
