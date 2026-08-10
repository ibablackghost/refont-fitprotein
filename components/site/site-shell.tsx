import { TopBar } from '@/components/site/top-bar'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import {
  WhatsAppButton,
  ProteinCalculatorTab,
  BackToTop,
} from '@/components/site/floating-actions'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-[100] overflow-visible bg-white shadow-[0_1px_0_rgba(15,23,32,0.06)]">
        <TopBar />
        <SiteHeader />
      </div>
      <main className="relative z-0">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
      <ProteinCalculatorTab />
      <BackToTop />
    </div>
  )
}
