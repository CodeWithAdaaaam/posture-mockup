import type { Metadata } from 'next'
import './globals.css'
import { CustomCursor } from '@/components/CustomCursor'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://posture.ma'),
  title: {
    default: 'POSTURE — Studio Pilates · Harhoura, Rabat',
    template: '%s | POSTURE Pilates Rabat',
  },
  description: 'POSTURE est un studio de Pilates de luxe à Harhoura, Rabat — face à l\'Océan Atlantique. Cours reformer, séances privées et semi-privées. Move. Align. Restore.',
  keywords: [
    'pilates rabat',
    'pilates harhoura',
    'studio pilates maroc',
    'reformer pilates rabat',
    'cours pilates rabat',
    'pilates ocean rabat',
    'wellness rabat',
    'studio bien-être rabat',
    'pilates harhoura rabat',
    'T Gallery harhoura',
  ],
  authors: [{ name: 'POSTURE Studio' }],
  creator: 'POSTURE Studio',
  publisher: 'POSTURE Studio',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    alternateLocale: ['en_US', 'ar_MA'],
    url: 'https://posture.ma',
    siteName: 'POSTURE — Studio Pilates Rabat',
    title: 'POSTURE — Studio Pilates · Harhoura, Rabat',
    description: 'Studio de Pilates de luxe à Harhoura, Rabat. Face à l\'Océan Atlantique. Rejoignez les Founding Members.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'POSTURE Studio Pilates Harhoura Rabat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POSTURE — Studio Pilates · Harhoura, Rabat',
    description: 'Studio de Pilates de luxe à Harhoura, Rabat. Face à l\'Océan Atlantique.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ExerciseGym',
              name: 'POSTURE Studio Pilates',
              description: 'Studio de Pilates de luxe à Harhoura, Rabat — face à l\'Océan Atlantique.',
              url: 'https://posture-life.com',
              telephone: '+212-5XX-XXXXXX',
              email: 'posturelife09@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'T Gallery, Avenue de l\'Ocean',
                addressLocality: 'Harhoura',
                addressRegion: 'Rabat-Salé-Kénitra',
                addressCountry: 'MA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 33.9156,
                longitude: -6.9922,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'],
                  opens: '07:00',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday'],
                  opens: '08:00',
                  closes: '18:00',
                },
              ],
              priceRange: '$$',
              image: 'https://posture-life.com/og-image.jpg',
              sameAs: [
                'https://www.instagram.com/posturehaus',
              ],
            }),
          }}
        />
      </head>
      <body>
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}