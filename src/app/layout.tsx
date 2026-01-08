import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  // 1. metadataBase permet de transformer les chemins relatifs en URLs absolues
  metadataBase: new URL('https://esthetique-belair.fr'), 
  
  title: 'Centre Esthétique Bel-Air | Paris Nation',
  description: 'Centre de médecine esthétique haut de gamme à Paris Nation. Expertise médicale, soins personnalisés et résultats naturels.',
  
  // 2. Indique à Google l'URL de référence pour éviter les doublons (WWW vs non-WWW)
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      {/* Note : Next.js gère automatiquement le viewport, 
          vous pouvez laisser la balise head vide ou supprimer le <head> si 
          vous n'avez pas d'autres scripts spécifiques.
      */}
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}