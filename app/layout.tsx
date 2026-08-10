import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Fit & Protein × AMKA — Nutrition sportive au Sénégal',
    template: '%s · Fit & Protein × AMKA',
  },
  description:
    'Partenaire officiel AMKA Nutrition au Sénégal. Whey, créatine et nutrition sportive premium à Dakar.',
}

export const viewport: Viewport = {
  themeColor: '#3820f0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} light`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
