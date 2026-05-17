import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Soins de Médecine Esthétique | Centre Bel-Air Paris Nation',
  description: 'Découvrez tous nos soins de médecine esthétique à Paris Nation (75012) : HIFU, Botox, acide hyaluronique, peelings, microneedling, EMSlim, épilation laser. Centre Esthétique Bel-Air.',
  alternates: {
    canonical: 'https://esthetique-belair.fr/nos-soins',
  },
  openGraph: {
    title: 'Nos Soins de Médecine Esthétique | Centre Bel-Air Paris Nation',
    description: 'Soins du visage, du corps et au laser par dermatologue à Paris 12 Nation. HIFU, Botox, acide hyaluronique, peelings, microneedling, EMSlim, épilation laser.',
    url: 'https://esthetique-belair.fr/nos-soins',
    siteName: 'Centre Esthétique Bel-Air',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function NosSoinsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
