import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HIFU : Le Secret du Rajeunissement Cutané Sans Chirurgie | Dr Hazzia Jean Luc',
  description: 'Découvrez les bienfaits du HIFU (ultrasons focalisés) pour le rajeunissement du visage sans chirurgie. Analyse scientifique par le Dr Hazzia Jean Luc au Centre Esthétique Bel-Air Paris Nation.',
  alternates: {
    canonical: 'https://esthetique-belair.fr/blog/hifu-rajeunissement-cutane-sans-chirurgie',
  },
  openGraph: {
    title: 'Le HIFU : Le Secret du Rajeunissement Cutané Sans Chirurgie',
    description: 'Analyse scientifique des bienfaits du HIFU par le Dr Hazzia Jean Luc. Études cliniques, mécanisme biologique et résultats validés.',
    url: 'https://esthetique-belair.fr/blog/hifu-rajeunissement-cutane-sans-chirurgie',
    siteName: 'Centre Esthétique Bel-Air',
    locale: 'fr_FR',
    type: 'article',
    images: [{ url: '/images/soins/hifu.png', width: 1200, height: 630, alt: 'HIFU rajeunissement cutané - Centre Esthétique Bel-Air Paris Nation' }],
  },
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
