import React from 'react';

interface SchemaOrgProps {
  type: 'MedicalProcedure' | 'MedicalClinic' | 'MedicalTherapy';
  name: string;
  description: string;
  image?: string;
  price?: number;
  priceSpecification?: string;
  medicalSpecialty?: string;
  treatmentIndication?: string;
  bodyLocation?: string[];
  procedure?: string[];
  url: string;
  faq?: { question: string; reponse: string }[];
}

function SchemaOrg({
  type,
  name,
  description,
  image,
  price,
  priceSpecification,
  medicalSpecialty = "Médecine Esthétique",
  treatmentIndication,
  bodyLocation,
  procedure,
  url,
  faq
}: SchemaOrgProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    medicalSpecialty,
    ...(image && { image }),
    ...(price && {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        ...(priceSpecification && { priceSpecification })
      }
    }),
    ...(treatmentIndication && { treatmentIndication }),
    ...(bodyLocation && { bodyLocation }),
    ...(procedure && { procedure }),
    provider: {
      "@type": "MedicalClinic",
      name: "Centre Esthétique Bel-Air",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22 avenue du Bel Air",
        addressLocality: "Paris",
        postalCode: "75012",
        addressRegion: "Île-de-France",
        addressCountry: "FR"
      },
      telephone: "+33143451192",
      url: "https://esthetique-belair.fr",
      areaServed: {
        "@type": "City",
        name: "Paris 12e arrondissement",
        containedInPlace: {
          "@type": "City",
          name: "Paris"
        }
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.8462,
        longitude: 2.3960
      }
    }
  };

  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.reponse
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}

export default SchemaOrg; 