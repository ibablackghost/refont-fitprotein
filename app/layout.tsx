import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Exo_2, Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const exo = Exo_2({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-exo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Jollof Protéine — Compléments, fitness & chaussures au Sénégal',
    template: '%s · Jollof Protéine',
  },
  description:
    'Jollof Protéine : compléments alimentaires, équipement fitness et chaussures de sport. Livraison à Dakar et partout au Sénégal.',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${exo.variable} light`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
