import type { Metadata } from 'next'
import { Playfair_Display, Lora, Lato, DM_Mono } from 'next/font/google'
import { Header } from '@/components/Header'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
})
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CookDrop — Deux recettes tombent chaque jour',
  description: 'Chaque matin, deux recettes simples tombent comme un drop. Tu choisis, tu cuisines, tu manges bien.',
  keywords: 'recettes simples, cuisine facile, recette du jour, cuisiner chez soi',
  openGraph: {
    title: 'CookDrop — Deux recettes tombent chaque jour',
    description: 'Chaque matin, deux recettes simples tombent comme un drop.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${lora.variable} ${lato.variable} ${dmMono.variable}`}
    >
      <body style={{ background: '#F2EBE0', minHeight: '100vh' }}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
