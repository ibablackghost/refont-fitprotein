import { BadgeCheck, Headset, ShieldCheck, Truck } from 'lucide-react'
import { PHONE_DISPLAY } from '@/lib/data'

const features = [
  { icon: Truck, title: 'Livraison rapide', text: '24 h à Dakar, offerte dès 30 000 FCFA' },
  { icon: ShieldCheck, title: 'Paiement flexible', text: 'Wave, Orange Money, à la livraison' },
  { icon: BadgeCheck, title: '100% authentique', text: 'Marques officielles et vérifiées' },
  { icon: Headset, title: 'Conseil 7j/7', text: PHONE_DISPLAY },
]

export function FeaturesBar() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 lg:grid-cols-4 lg:gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 -skew-x-6 items-center justify-center bg-ink text-primary">
              <f.icon className="h-5 w-5 skew-x-6" />
            </span>
            <div className="leading-tight">
              <p className="font-heading text-sm font-extrabold uppercase italic text-ink">{f.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
