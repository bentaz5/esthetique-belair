import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Médecine Esthétique | Centre Bel-Air Paris Nation',
  description: 'Articles et conseils d\'experts en médecine esthétique à Paris Nation. HIFU, Botox, acide hyaluronique, peelings : analyses scientifiques par le Dr Hazzia Jean Luc.',
  alternates: {
    canonical: 'https://esthetique-belair.fr/blog',
  },
  openGraph: {
    title: 'Blog Médecine Esthétique | Centre Bel-Air Paris Nation',
    description: 'Articles et conseils d\'experts en médecine esthétique par notre équipe médicale à Paris 12 Nation.',
    url: 'https://esthetique-belair.fr/blog',
    siteName: 'Centre Esthétique Bel-Air',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
