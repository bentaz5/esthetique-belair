import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SchemaOrg from '@/components/SchemaOrg';
import SoinClient from './SoinClient';

// 1. DÉFINITION DES TYPES (CORRIGÉ POUR NEXT.JS 15)
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

type Soin = {
  id: string;
  titre: string;
  accroche: string;
  imageHero: string;
  introduction: { texte: string; pourQui: string; };
  avantages: { titre: string; items: string[]; }[];
  zonesTraitees: string[];
  deroulement: { titre: string; etapes: string[]; };
  resultats: { description: string; duree: string; avantApres?: { avant: string; apres: string; }; };
  effetsSecondaires: string[];
  contreIndications: string[];
  tarifs: { base: number; description: string; };
  faq: { question: string; reponse: string; }[];
  typesPeelings?: { nom: string; intensite: string; description: string; indications: string[]; prix: number; }[];
};

// 2. BASE DE DONNÉES DES SOINS
const soins: Record<string, Soin> = {
  'microneedling-radiofrequence': {
    id: 'microneedling',
    titre: 'Microneedling avec Radiofréquence',
    accroche: 'Stimulation optimale du collagène pour un effet raffermissant puissant',
    imageHero: '/images/soins/microneedling.png',
    introduction: {
      texte: "Le microneedling avec radiofréquence est une technique innovante qui combine la stimulation mécanique de la peau avec l'énergie thermique de la radiofréquence. Cette synergie permet une stimulation profonde du collagène et de l'élastine.",
      pourQui: "Idéal pour les personnes souhaitant améliorer la texture de leur peau, réduire les rides, les cicatrices d'acné ou le relâchement cutané."
    },
    avantages: [{ titre: 'Bénéfices principaux', items: ['Stimulation profonde du collagène', 'Amélioration de la texture cutanée', 'Réduction des rides et ridules', 'Atténuation des cicatrices', 'Raffermissement de la peau', 'Correction de l\'ovale du visage', 'Éclat naturel du teint'] }],
    zonesTraitees: ['Visage complet', 'Cou', 'Décolleté', 'Zone péri-oculaire', 'Zone péri-buccale'],
    deroulement: { titre: 'Déroulement de la séance', etapes: ['Nettoyage et préparation de la peau', 'Traitement par microneedling avec radiofréquence', 'Application de soins apaisants', 'Conseils post-traitement'] },
    resultats: { 
      description: 'Les résultats sont progressifs et naturels. Une amélioration de la texture et de la fermeté de la peau est visible dès la première séance.', 
      duree: '4 à 5 séances espacées de 4 semaines environ',
      avantApres: { avant: '/images/avant-apres/microneedling-avant.png', apres: '/images/avant-apres/microneedling-apres.png' }
    },
    effetsSecondaires: ['Rougeur temporaire (24-48h)', 'Sensibilité cutanée', 'Légère desquamation'],
    contreIndications: ['Grossesse', 'Allaitement', 'Infections cutanées actives', 'Cicatrices récentes', 'Peau très sensible'],
    tarifs: { base: 240, description: 'Tarif par séance pour le visage complet.' },
    faq: [
      { question: 'Combien de séances sont nécessaires ?', reponse: 'En moyenne, 4 à 5 séances sont recommandées pour des résultats optimaux, espacées de 4 à 6 semaines.' },
      { question: 'La séance est-elle douloureuse ?', reponse: "Une crème anesthésiante est appliquée avant le traitement pour minimiser l'inconfort. La sensation est généralement bien tolérée." },
      { question: 'Quand puis-je reprendre mes activités ?', reponse: "Vous pouvez reprendre vos activités normales le jour même, en évitant l'exposition au soleil et les produits irritants pendant 48h." }
    ]
  },
  'botox': {
    id: 'botox',
    titre: 'Botox',
    accroche: "Traitement des rides d'expression pour un regard reposé et naturel",
    imageHero: '/images/soins/botox.png',
    introduction: {
      texte: "Le Botox est un traitement médical esthétique qui utilise la toxine botulique pour réduire temporairement l'apparition des rides d'expression.",
      pourQui: "Idéal pour les personnes souhaitant atténuer les rides du font, les rides du lion ou les pattes d'oie."
    },
    avantages: [{ titre: 'Bénéfices principaux', items: ['Réduction des rides d\'expression', 'Effet naturel et harmonieux', 'Résultats visibles en quelques jours', 'Durée d\'action de 4 à 6 mois', 'Traitement rapide et peu invasif'] }],
    zonesTraitees: ['Front', 'Pattes d\'oie', 'Rides du lion'],
    deroulement: { titre: 'Déroulement de la séance', etapes: ['Consultation préalable et analyse des besoins', 'Nettoyage de la zone à traiter', 'Injections de Botox', 'Application de glace si nécessaire', 'Conseils post-traitement'] },
    resultats: { 
      description: 'Les résultats apparaissent progressivement dans les 3 à 7 jours suivant le traitement.', 
      duree: '4 à 6 mois',
      avantApres: { avant: '/images/avant-apres/botox-front-avant.png', apres: '/images/avant-apres/botox-front-apres.png' }
    },
    effetsSecondaires: ['Légère rougeur', 'Petits hématomes possibles'],
    contreIndications: ['Grossesse', 'Allaitement', 'Maladies neuromusculaires'],
    tarifs: { base: 360, description: 'Tarif haut du visage' },
    faq: [
      { question: 'Combien de temps dure l\'effet ?', reponse: "L'effet dure généralement entre 4 et 6 mois." },
      { question: 'La séance est-elle douloureuse ?', reponse: 'Les injections sont peu douloureuses grâce à l\'utilisation d\'aiguilles très fines.' }
    ]
  },
  'peelings': {
    id: 'peelings',
    titre: 'Peelings Médicaux',
    accroche: 'Renouvellement cutané personnalisé pour une peau éclatante',
    imageHero: '/images/soins/peeling-medical.png',
    introduction: {
      texte: "Les peelings médicaux stimulent le renouvellement cellulaire pour traiter les imperfections et l'éclat.",
      pourQui: "Idéal pour les taches pigmentaires, l'acné, ou le rajeunissement du teint."
    },
    typesPeelings: [
      { nom: "Peeling à l'acide glycolique", intensite: "Superficiel", description: "Éclat et texture", indications: ["Peau terne"], prix: 180 },
      { nom: "Peeling TCA", intensite: "Moyen", description: "Rénovation profonde", indications: ["Rides", "Cicatrices"], prix: 480 }
    ],
    avantages: [{ titre: 'Bénéfices', items: ['Texture améliorée', 'Teint unifié', 'Réduction des taches'] }],
    zonesTraitees: ['Visage', 'Cou', 'Décolleté', 'Mains'],
    deroulement: { titre: 'Séance', etapes: ['Nettoyage', 'Application du peeling', 'Neutralisation', 'Soin apaisant'] },
    resultats: { 
      description: 'Peau plus lisse et lumineuse.', 
      duree: '3 à 6 séances selon le type',
      avantApres: { avant: '/images/avant-apres/peeling-avant.png', apres: '/images/avant-apres/peeling-apres.png' }
    },
    effetsSecondaires: ['Rougeurs', 'Desquamation'],
    contreIndications: ['Exposition solaire récente', 'Grossesse'],
    tarifs: { base: 250, description: 'Varie selon le type de peeling.' },
    faq: [{ question: 'Puis-je me maquiller ?', reponse: 'Il est recommandé d\'attendre 24h à 48h.' }]
  },
  'hifu': {
    id: 'hifu',
    titre: 'HIFU (Ultrasons Focalisés)',
    accroche: "Raffermissement profond sans chirurgie et lifting naturel",
    imageHero: '/images/soins/hifu.png',
    introduction: {
      texte: "Le HIFU utilise des ultrasons pour stimuler le collagène en profondeur sans éviction sociale.",
      pourQui: "Pour raffermir l'ovale du visage et le cou."
    },
    avantages: [{ titre: 'Bénéfices', items: ['Lifting non invasif', 'Redensification', 'Une seule séance souvent suffisante'] }],
    zonesTraitees: ['Ovale', 'Double menton', 'Cou', 'Décolleté'],
    deroulement: { titre: 'Séance', etapes: ['Marquage des zones', 'Application du gel', 'Traitement ultrasons'] },
    resultats: { 
      description: 'Résultats optimaux après 3 à 6 mois.', 
      duree: 'Entretien tous les 12-18 mois',
      avantApres: { avant: '/images/avant-apres/hifu-avant.png', apres: '/images/avant-apres/hifu-apres.png' }
    },
    effetsSecondaires: ['Sensibilité au toucher', 'Légers oedèmes'],
    contreIndications: ['Implants métalliques', 'Grossesse'],
    tarifs: { base: 480, description: 'À partir de 480€ selon la zone.' },
    faq: [{ question: 'Est-ce définitif ?', reponse: "Le vieillissement continue, mais l'effet dure plus d'un an." }]
  },
  'acide-hyaluronique': {
    id: 'acide-hyaluronique',
    titre: 'Acide Hyaluronique',
    accroche: 'Restauration des volumes et hydratation profonde',
    imageHero: '/images/soins/acide-hyaluronique.png',
    introduction: {
      texte: "Molécule naturelle permettant de combler les rides et de redessiner les contours.",
      pourQui: "Pour les lèvres, pommettes, cernes ou menton."
    },
    avantages: [{ titre: 'Bénéfices', items: ['Comblement immédiat', 'Hydratation', 'Résultat naturel'] }],
    zonesTraitees: ['Lèvres', 'Sillons nasogéniens', 'Cernes', 'Pommettes'],
    deroulement: { titre: 'Séance', etapes: ['Analyse', 'Injections', 'Massage'] },
    resultats: { 
      description: 'Effet immédiat et naturel.', 
      duree: '9 à 18 mois selon la zone',
      avantApres: { avant: '/images/avant-apres/acide-hyaluronique-avant.png', apres: '/images/avant-apres/acide-hyaluronique-apres.png' }
    },
    effetsSecondaires: ['Gonflement temporaire', 'Ecchymoses'],
    contreIndications: ['Maladies auto-immunes actives'],
    tarifs: { base: 360, description: 'Par seringue/injection.' },
    faq: [{ question: 'Est-ce douloureux ?', reponse: 'Le produit contient un anesthésiant pour un confort total.' }]
  },
  'emslim-neo': {
    id: 'emslim-neo',
    titre: 'Radiofréquence EMSlim',
    accroche: 'Tonification musculaire et réduction de la graisse sans effort',
    imageHero: '/images/soins/radiofrequence-emslim.png',
    introduction: {
      texte: "Technologie provoquant 20 000 contractions musculaires en 30 minutes.",
      pourQui: "Pour sculpter le ventre, les fesses ou renforcer le plancher pelvien."
    },
    avantages: [{ titre: 'Bénéfices', items: ['Muscles tonifiés', 'Graisse réduite', 'Sans effort'] }],
    zonesTraitees: ['Abdomen', 'Fessiers', 'Cuisses', 'Bras'],
    deroulement: { titre: 'Séance', etapes: ['Installation des applicateurs', 'Séance de 30 min'] },
    resultats: { 
      description: 'Visible dès la 3ème séance.', 
      duree: 'Protocole de 4 séances conseillé',
      avantApres: { avant: '/images/avant-apres/emslim-avant.png', apres: '/images/avant-apres/emslim-apres.png' }
    },
    effetsSecondaires: ['Courbatures'],
    contreIndications: ['Pacemaker', 'Implants métalliques'],
    tarifs: { base: 170, description: 'La séance de 30 minutes.' },
    faq: [{ question: 'Quelle sensation ?', reponse: 'Contractions intenses mais non douloureuses.' }]
  },
  'epilation-laser': {
    id: 'epilation-laser',
    titre: 'Épilation Définitive au Laser Diode',
    accroche: 'Élimination durable des poils pour tous types de peaux',
    imageHero: '/images/soins/epilation-laser.jpg',
    introduction: {
      texte: "Le Laser Diode permet une épilation efficace, rapide et confortable.",
      pourQui: "Hommes et femmes, tous phototypes."
    },
    avantages: [{ titre: 'Bénéfices', items: ['Peau lisse définitivement', 'Moins de douleur (refroidissement)', 'Efficace sur poils foncés'] }],
    zonesTraitees: ['Aisselles', 'Maillot', 'Jambes', 'Dos', 'Visage'],
    deroulement: { titre: 'Séance', etapes: ['Protection', 'Paramétrage laser', 'Balayage zone'] },
    resultats: { description: 'Réduction visible dès la 1ère séance.', duree: '6 à 8 séances en moyenne' },
    effetsSecondaires: ['Rougeur passagère'],
    contreIndications: ['Bronzage récent', 'Grossesse'],
    tarifs: { base: 60, description: 'Selon la zone traitée.' },
    faq: [{ question: 'Est-ce définitif ?', reponse: 'Oui, une séance d\'entretien annuelle peut être requise.' }]
  }
};

// 3. LOGIQUE SEO (GENERATEMETADATA)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const soin = soins[slug];

  if (!soin) return { title: 'Soin non trouvé | Centre Bel-Air' };

  const url = `https://esthetique-belair.fr/nos-soins/${slug}`;

  return {
    title: `${soin.titre} | Centre Esthétique Bel-Air Paris`,
    description: soin.accroche,
    alternates: { canonical: url },
    openGraph: {
      title: soin.titre,
      description: soin.accroche,
      url: url,
      siteName: 'Centre Esthétique Bel-Air',
      locale: 'fr_FR',
      type: 'article',
      images: [{ url: soin.imageHero, width: 1200, height: 630, alt: soin.titre }],
    }
  };
}

// 4. COMPOSANT PAGE PRINCIPAL
export default async function SoinPage({ params, searchParams }: Props) {
  // On attend la résolution des promesses (Requis par Next.js 15)
  const { slug } = await params;
  await searchParams; // On l'attend même si non utilisé pour satisfaire TS

  const soin = soins[slug];

  if (!soin) {
    notFound();
  }

  return (
    <>
      <SchemaOrg 
        type="MedicalProcedure"
        name={soin.titre}
        description={soin.accroche}
        image={soin.imageHero}
        price={soin.tarifs.base}
        priceSpecification={soin.tarifs.description}
        url={`https://esthetique-belair.fr/nos-soins/${slug}`}
        bodyLocation={soin.zonesTraitees}
        procedure={soin.deroulement.etapes}
        medicalSpecialty="Médecine Esthétique"
      />
      <Navigation />
      <main>
        {/* 'as any' pour bypasser le mismatch de type entre Soin et les props de SoinClient */}
        <SoinClient soin={soin as any} />
      </main>
      <Footer />
    </>
  );
}