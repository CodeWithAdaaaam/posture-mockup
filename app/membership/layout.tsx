import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founding Members — Rejoignez POSTURE Pilates Rabat',
  description: 'Devenez l\'un des 50 Founding Members de POSTURE, le premier studio Pilates de luxe à Harhoura, Rabat. Accès exclusif, tarifs préférentiels à vie, face à l\'Océan Atlantique.',
  keywords: [
    'founding members pilates rabat',
    'abonnement pilates rabat',
    'membership pilates maroc',
    'studio pilates harhoura',
    'pilates luxe rabat',
    'rejoindre pilates rabat',
    'premier studio pilates harhoura',
  ],
  openGraph: {
    title: 'Devenez Founding Member — POSTURE Pilates Rabat',
    description: 'Rejoignez les 50 premiers membres de POSTURE. Studio Pilates de luxe à Harhoura, Rabat — face à l\'Océan Atlantique.',
    url: 'https://posture-life.com/membership',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://posture-life.com/membership' },
}

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* FAQ Schema — SAIO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Qu\'est-ce que le programme Founding Members de POSTURE ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Le programme Founding Members de POSTURE est un accès exclusif réservé aux 50 premiers membres du studio. Il inclut des tarifs préférentiels à vie, un accès prioritaire à tous les cours et workshops, ainsi qu\'une évaluation personnalisée de votre pratique.',
                },
              },
              {
                '@type': 'Question',
                name: 'Où est situé POSTURE Studio à Rabat ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'POSTURE Studio est situé à T Gallery, Harhoura, Rabat — face à l\'Océan Atlantique. C\'est le premier studio Pilates de luxe de la région Rabat-Salé-Kénitra au Maroc.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quels sont les avantages d\'être Founding Member chez POSTURE ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Les Founding Members bénéficient de tarifs préférentiels à vie, d\'un accès prioritaire à tous les cours reformer et tapis, d\'une évaluation wellness personnalisée, et font partie d\'une communauté exclusive de 50 membres pionniers du bien-être à Rabat.',
                },
              },
              {
                '@type': 'Question',
                name: 'Comment rejoindre les Founding Members de POSTURE Pilates Rabat ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pour rejoindre les Founding Members de POSTURE, remplissez le formulaire sur cette page avec votre nom, email et numéro WhatsApp. L\'équipe POSTURE vous contactera avant l\'ouverture officielle du studio à Harhoura, Rabat.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quand ouvre le studio POSTURE à Harhoura ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'POSTURE Studio ouvre prochainement à T Gallery Harhoura, Rabat. Rejoignez la liste des Founding Members pour être informé en priorité de la date d\'ouverture et bénéficier des avantages exclusifs.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quel type de Pilates pratique-t-on chez POSTURE Rabat ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'POSTURE propose du Pilates sur reformer en petits groupes (maximum 6 personnes), des séances privées, semi-privées et des cours fondamentaux sur tapis. Tous les cours sont encadrés par des coachs certifiés internationalement.',
                },
              },
            ],
          }),
        }}
      />

      {/* Offer Schema — SAIO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Offer',
            name: 'Founding Members — POSTURE Studio Pilates Rabat',
            description: 'Accès exclusif founding member au premier studio Pilates de luxe à Harhoura, Rabat. Limité à 50 places.',
            availability: 'https://schema.org/LimitedAvailability',
            availabilityEnds: '2025-12-31',
            url: 'https://posture-life.com/membership',
            seller: {
              '@type': 'LocalBusiness',
              name: 'POSTURE Studio Pilates',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'T Gallery, Avenue de l\'Ocean',
                addressLocality: 'Harhoura',
                addressRegion: 'Rabat-Salé-Kénitra',
                addressCountry: 'MA',
              },
            },
          }),
        }}
      />

      {children}
    </>
  )
}