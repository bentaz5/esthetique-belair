import Head from 'next/head';

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Metadata = ({
  title = 'Centre Esthétique Bel-Air | Médecine Esthétique Paris Nation',
  description = 'Centre de médecine esthétique à Paris Nation. Soins du visage, injections, laser, HIFU et traitements anti-âge par des médecins spécialistes.',
  image = 'https://www.esthetique-belair.fr/images/og-image.jpg',
  url = 'https://www.esthetique-belair.fr'
}: MetadataProps) => {
  const fullTitle = title.includes('Centre Esthétique Bel-Air') 
    ? title 
    : `${title} | Centre Esthétique Bel-Air`;

  return (
    <Head>
      {/* Balises Meta Standards */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Balises Open Graph pour les réseaux sociaux */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Centre Esthétique Bel-Air" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Autres balises Meta importantes */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Balises de localisation */}
      <meta name="geo.region" content="FR-75" />
      <meta name="geo.placename" content="Paris" />
      <meta name="geo.position" content="48.8469097;2.3949739" />
      <meta name="ICBM" content="48.8469097, 2.3949739" />
    </Head>
  );
};

export default Metadata; 