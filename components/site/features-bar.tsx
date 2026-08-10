import { BadgeCheck, Headset, ShieldCheck, Truck } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Livraison gratuite', text: 'Dès 30 000 FCFA' },
  { icon: ShieldCheck, title: 'Paiement flexible', text: 'Wave, Orange Money…' },
  { icon: BadgeCheck, title: 'Produits authentiques', text: 'Marques certifiées' },
  { icon: Headset, title: 'Support 7j/7', text: '+221 78 381 31 81' },
]

export function FeaturesBar() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 lg:grid-cols-4 lg:gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-primary">
              <f.icon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink">{f.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
