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
  children?: any;
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
  url
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
        streetAddress: "4 rue de la Folie Regnault",
        addressLocality: "Paris",
        postalCode: "75011",
        addressCountry: "FR"
      },
      telephone: "+33000000000"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default SchemaOrg; 