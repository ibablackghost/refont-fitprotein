import { Suspense } from 'react'
import { TopBar } from '@/components/site/top-bar'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import {
  WhatsAppButton,
  ProteinCalculatorTab,
  BackToTop,
} from '@/components/site/floating-actions'
import { NavigationLoader } from '@/components/site/navigation-loader'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <SiteHeader />
      <main className="relative z-0">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
      <ProteinCalculatorTab />
      <BackToTop />
      <Suspense fallback={null}>
        <NavigationLoader />
      </Suspense>
    </div>
  )
}
