import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SchemaOrg from '@/components/SchemaOrg';
import SoinClient from './SoinClient';

// --- TYPES (CORRIGÉS POUR NEXT.JS 15) ---
type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

type Soin = {
  id: string;
  titre: string;
  accroche: string;
  imageHero: string;
  introduction: {
    texte: string;
    pourQui: string;
  };
  avantages: {
    titre: string;
    items: string[];
  }[];
  zonesTraitees: string[];
  deroulement: {
    titre: string;
    etapes: string[];
  };
  resultats: {
    description: string;
    duree: string;
    avantApres?: {
      avant: string;
      apres: string;
    };
  };
  effetsSecondaires: string[];
  contreIndications: string[];
  tarifs: {
    base: number;
    description: string;
  };
  faq: {
    question: string;
    reponse: string;
  }[];
  typesPeelings?: {
    nom: string;
    intensite: string;
    description: string;
    indications: string[];
    prix: number;
  }[];
};

// --- BASE DE DONNÉES COMPLÈTE ---
const soins: Record<string, Soin> = {
  'microneedling-radiofrequence': {
    id: 'microneedling',
    titre: 'Microneedling avec Radiofréquence',
    accroche: 'Stimulation optimale du collagène pour un effet raffermissant puissant',
    imageHero: '/images/soins/microneedling.png',
    introduction: {
      texte: 'Le microneedling avec radiofréquence est une technique innovante qui combine la stimulation mécanique de la peau avec l\'energy thermique de la radiofréquence. Cette synergie permet une stimulation profonde du collagène et de l\'élastine.',
      pourQui: 'Idéal pour les personnes souhaitant améliorer la texture de leur peau, réduire les rides, les cicatrices d\'acné ou le relâchement cutané.'
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          'Stimulation profonde du collagène',
          'Amélioration de la texture cutanée',
          'Réduction des rides et ridules',
          'Atténuation des cicatrices',
          'Raffermissement de la peau',
          'Correction de l\'ovale du visage',
          'Éclat naturel du teint'
        ]
      }
    ],
    zonesTraitees: [
      'Visage complet',
      'Cou',
      'Décolleté',
      'Zone péri-oculaire',
      'Zone péri-buccale'
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        'Nettoyage et préparation de la peau',
        'Traitement par microneedling avec radiofréquence',
        'Application de soins apaisants',
        'Conseils post-traitement'
      ]
    },
    resultats: {
      description: 'Les résultats sont progressifs et naturels. Une amélioration de la texture et de la fermeté de la peau est visible dès la première séance.',
      duree: '4 à 5 séances espacées de 4 semaines environ',
      avantApres: {
        avant: '/images/avant-apres/test.png',
        apres: '/images/avant-apres/microneedling-apres.png'
      }
    },
    effetsSecondaires: [
      'Rougeur temporaire (24-48h)',
      'Sensibilité cutanée',
      'Légère desquamation'
    ],
    contreIndications: [
      'Grossesse',
      'Allaitement',
      'Infections cutanées actives',
      'Cicatrices récentes',
      'Peau très sensible'
    ],
    tarifs: {
      base: 240,
      description: 'Tarif par séance pour le visage complet.'
    },
    faq: [
      {
        question: 'Combien de séances sont nécessaires ?',
        reponse: 'En moyenne, 4 à 5 séances sont recommandées pour des résultats optimaux, espacées de 4 à 6 semaines.'
      },
      {
        question: 'La séance est-elle douloureuse ?',
        reponse: 'Une crème anesthésiante est appliquée avant le traitement pour minimiser l\'inconfort. La sensation est généralement bien tolérée.'
      },
      {
        question: 'Quand puis-je reprendre mes activités ?',
        reponse: 'Vous pouvez reprendre vos activités normales le jour même, en évitant l\'exposition au soleil et les produits irritants pendant 48h.'
      }
    ]
  },
  'botox': {
    id: 'botox',
    titre: 'Botox',
    accroche: 'Traitement des rides d\'expression',
    imageHero: '/images/soins/botox.png',
    introduction: {
      texte: 'Le Botox est un traitement médical esthétique qui utilise la toxine botulique pour réduire temporairement l\'apparition des rides d\'expression.',
      pourQui: 'Idéal pour les personnes souhaitant atténuer les rides du font, les rides du lion ou les pattes d\'oie.'
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          'Réduction des rides d\'expression',
          'Effet naturel et harmonieux',
          'Résultats visibles en quelques jours',
          'Durée d\'action de 4 à 6 mois',
          'Traitement rapide et peu invasif'
        ]
      }
    ],
    zonesTraitees: [
      'Front',
      'Pattes d\'oie',
      'Rides du lion'
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        'Consultation préalable et analyse des besoins',
        'Nettoyage de la zone à traiter',
        'Injections de Botox',
        'Application de glace si nécessaire',
        'Conseils post-traitement'
      ]
    },
    resultats: {
      description: 'Les résultats apparaissent progressivement dans les 3 à 7 jours suivant le traitement. L\'effet dure généralement 4 à 6 mois.',
      duree: '4 à 6 mois',
      avantApres: {
        avant: '/images/avant-apres/botox-front-avant.png',
        apres: '/images/avant-apres/botox-front-apres.png'
      }
    },
    effetsSecondaires: [
      'Légère rougeur au point d\'injection',
      'Petits hématomes possibles',
      'Sensation de lourdeur temporaire'
    ],
    contreIndications: [
      'Grossesse',
      'Allaitement',
      'Maladies neuromusculaires',
      'Allergie à la toxine botulique',
      'Infections cutanées actives'
    ],
    tarifs: {
      base: 360,
      description: 'Tarif haut du visage'
    },
    faq: [
      {
        question: 'Combien de temps dure l\'effet ?',
        reponse: 'L\'effet dure généralement entre 4 et 6 mois. Des séances de rappel permettent de maintenir les résultats.'
      },
      {
        question: 'La séance est-elle douloureuse ?',
        reponse: 'Les injections sont peu douloureuses grâce à l\'utilisation d\'aiguilles très fines.'
      },
      {
        question: 'Quand puis-je reprendre mes activités ?',
        reponse: 'Vous pouvez reprendre vos activités normales immédiatement après la séance, en évitant les efforts physiques intenses pendant 24h.'
      }
    ]
  },
  'botox-hyperhidrose': {
    id: 'botox-hyperhidrose',
    titre: 'Botox pour transpiration excessive',
    accroche: 'Traitement efficace de l\'hyperhidrose (transpiration excessive) par injections de toxine botulique',
    imageHero: '/images/soins/injection-botox-aisselles.png',
    introduction: {
      texte: 'Le Botox permet de traiter efficacement la transpiration excessive (hyperhidrose) des aisselles, des mains ou des pieds. Les injections bloquent temporairement l\'activité des glandes sudoripares responsables de la production excessive de sueur.',
      pourQui: 'Idéal pour les personnes souffrant d\'hyperhidrose localisée et souhaitant retrouver confort et confiance au quotidien.'
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          'Réduction significative de la transpiration',
          'Amélioration du confort de vie',
          'Procédure rapide et peu invasif',
          'Effet réversible et sans danger',
          'Résultats visibles en quelques jours',
          'Durée d\'action de 4 à 6 mois'
        ]
      }
    ],
    zonesTraitees: [
      'Aisselles',
      'Paumes des mains',
      'Plantes des pieds'
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        'Consultation préalable et analyse des besoins',
        'Nettoyage de la zone à traiter',
        'Injections de Botox',
        'Conseils post-traitement'
      ]
    },
    resultats: {
      description: 'Les résultats apparaissent progressivement dans les 3 à 7 jours suivant le traitement. L\'effet dure généralement 4 à 6 mois.',
      duree: '4 à 6 mois'
    },
    effetsSecondaires: [
      'Légère rougeur au point d\'injection',
      'Petits hématomes possibles',
      'Sensation de lourdeur temporaire'
    ],
    contreIndications: [
      'Grossesse',
      'Allaitement',
      'Maladies neuromusculaires',
      'Allergie à la toxine botulique',
      'Infections cutanées actives'
    ],
    tarifs: {
      base: 400,
      description: 'Tarif par zone (aisselles, mains ou pieds)'
    },
    faq: [
      {
        question: 'Combien de temps dure l\'effet ?',
        reponse: 'L\'effet dure généralement entre 4 et 6 mois. Des séances de rappel permettent de maintenir les résultats.'
      },
      {
        question: 'La séance est-elle douloureuse ?',
        reponse: 'Les injections sont peu douloureuses grâce à l\'utilisation d\'aiguilles très fines.'
      },
      {
        question: 'Quand puis-je reprendre mes activités ?',
        reponse: 'Vous pouvez reprendre vos activités normales immédiatement après la séance, en évitant les efforts physiques intenses pendant 24h.'
      }
    ]
  },
  'peelings': {
    id: 'peelings',
    titre: 'Peelings Médicaux',
    accroche: 'Renouvellement cutané personnalisé pour une peau éclatante',
    imageHero: '/images/soins/peeling-medical.png',
    introduction: {
      texte: 'Les peelings médicaux sont des traitements qui stimulent le renouvellement cellulaire de la peau. Nous proposons différents types de peelings adaptés à vos besoins spécifiques.',
      pourQui: 'Idéal pour les personnes souhaitant améliorer la texture de leur peau, réduire les taches pigmentaires, atténuer les cicatrices d\'acné ou rajeunir leur teint.'
    },
    typesPeelings: [
      {
        nom: "Peeling à l'acide glycolique",
        intensite: "Moyen à Superficiel",
        description: "Amélioration de la texture et de l'éclat de la peau",
        indications: ["Peau terne", "Premières rides", "Irrégularités du teint"],
        prix: 180
      },
      {
        nom: "Peeling TCA",
        intensite: "Moyen à Fort",
        description: "Renouvellement cutané profond pour des résultats plus marqués",
        indications: ["Rides plus marquées", "Cicatrices légères", "Relâchement cutané léger"],
        prix: 480
      },
      {
        nom: "Peeling dépigmentant",
        intensite: "Variable selon les besoins",
        description: "Solution spécifique pour les problèmes de pigmentation",
        indications: ["Taches brunes", "Mélasma", "Hyperpigmentation post-inflammatoire"],
        prix: 180
      }
    ],
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          'Amélioration de la texture cutanée',
          'Réduction des taches pigmentaires',
          'Atténuation des cicatrices d\'acné',
          'Raffermissement de la peau',
          'Éclat naturel du teint',
          'Réduction des rides superficielles'
        ]
      }
    ],
    zonesTraitees: [
      'Visage complet',
      'Cou',
      'Décolleté',
      'Mains',
      'Zone péri-oculaire',
      'Zone péri-buccale'
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        'Nettoyage et préparation de la peau',
        'Application du peeling',
        'Temps de pose adapté',
        'Neutralisation du produit',
        'Application de soins apaisants',
        'Conseils post-traitement'
      ]
    },
    resultats: {
      description: 'Les résultats sont progressifs et naturels. Une amélioration de la texture et de l\'éclat de la peau est visible dès la première séance.',
      duree: '3 à 6 séances espacées de 2 à 4 semaines',
      avantApres: {
        avant: '/images/avant-apres/peeling-avant.png',
        apres: '/images/avant-apres/peeling-apres.png'
      }
    },
    effetsSecondaires: [
      'Rougeur temporaire',
      'Desquamation légère à modérée',
      'Sensibilité cutanée'
    ],
    contreIndications: [
      'Grossesse',
      'Allaitement',
      'Peau très sensible',
      'Cicatrices récentes',
      'Exposition solaire récente'
    ],
    tarifs: {
      base: 250,
      description: 'Tarif de base pour le visage complet. Le prix varie selon le type de peeling et la zone traitée.'
    },
    faq: [
      {
        question: 'Quel type de peeling me convient le mieux ?',
        reponse: 'Le choix du peeling dépend de vos besoins et de votre type de peau. Une consultation préalable permet de déterminer le traitement le plus adapté.'
      },
      {
        question: 'Combien de séances sont nécessaires ?',
        reponse: 'En moyenne, 3 à 6 séances sont recommandées pour des résultats optimaux, espacées de 2 à 4 semaines selon le type de peeling.'
      },
      {
        question: 'Quand puis-je me maquiller après un peeling ?',
        reponse: 'Il est recommandé d\'attendre 24 à 48h avant de se maquiller, selon le type de peeling et la réaction de votre peau.'
      }
    ]
  },
  'hifu': {
    id: 'hifu',
    titre: 'HIFU (Ultrasons Focalisés)',
    accroche: 'Raffermissement profond sans chirurgie',
    imageHero: '/images/soins/hifu.png',
    introduction: {
      texte: 'Le HIFU (High Intensity Focused Ultrasound) est une technologie innovante qui utilise des ultrasons focalisés pour stimuler la production de collagène en profondeur, permettant un raffermissement naturel de la peau.',
      pourQui: 'Idéal pour les personnes souhaitant raffermir leur peau, redessiner l\'ovale du visage ou améliorer l\'élasticité cutanée sans chirurgie.'
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          'Raffermissement profond de la peau',
          'Redensification naturelle',
          'Redéfinition de l\'ovale du visage',
          'Stimulation du collagène',
          'Résultats progressifs et naturels',
          'Pas de temps de récupération'
        ]
      }
    ],
    zonesTraitees: [
      'Visage complet',
      'Cou',
      'Décolleté',
      'Sourcils',
      'Zone péri-oculaire',
      'Zone péri-buccale'
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        'Nettoyage de la peau',
        'Application de gel conducteur',
        'Traitement par HIFU',
        'Application de soins apaisants',
        'Conseils post-traitement'
      ]
    },
    resultats: {
      description: 'Les résultats apparaissent progressivement sur 3 à 6 mois, avec une amélioration continue de la fermeté et de l\'élasticité de la peau.',
      duree: '3 séances recommandées espacées de 3 à 4 mois',
      avantApres: {
        avant: '/images/avant-apres/hifu-avant.png',
        apres: '/images/avant-apres/hifu-apres.png'
      }
    },
    effetsSecondaires: [
      'Rougeur temporaire',
      'Sensibilité cutanée',
      'Légère sensation de chaleur'
    ],
    contreIndications: [
      'Grossesse',
      'Allaitement',
      'Implants métalliques',
      'Maladies auto-immunes',
      'Peau très sensible'
    ],
    tarifs: {
      base: 480,
      description: 'Ovale du visage : 480€ ; Visage complet : 1080€ ; Cou : 480€ ; Pourtour de la bouche : 360€ ; Paupières et poches malaires : 360€ ; Visage complet + cou : 1320€ ; Zone du corps (ex: bras, ventre, intérieur des cuisses) : à partir de 960€'
    },
    faq: [
      {
        question: 'Combien de séances sont nécessaires ?',
        reponse: 'Une séance unique est généralement suffisante, avec des résultats qui s\'améliorent progressivement sur 3 à 6 mois.'
      },
      {
        question: 'La séance est-elle douloureuse ?',
        reponse: 'Le traitement est généralement bien toléré. Une sensation de chaleur ou de picotement peut être ressentie pendant la séance.'
      },
      {
        question: 'Quand puis-je reprendre mes activités ?',
        reponse: 'Vous pouvez reprendre vos activités normales immédiatement après la séance, sans temps de récupération.'
      }
    ]
  },
  'acide-hyaluronique': {
    id: 'acide-hyaluronique',
    titre: 'Acide Hyaluronique',
    accroche: 'Restauration des volumes, hydratation et harmonisation du visage',
    imageHero: '/images/soins/acide-hyaluronique.png',
    introduction: {
      texte: "L'acide hyaluronique est une molécule naturellement présente dans la peau. En médecine esthétique, il permet de combler les rides, restaurer les volumes, hydrater en profondeur et redessiner les contours du visage pour un résultat naturel.",
      pourQui: "Idéal pour les personnes souhaitant atténuer les rides, restaurer les volumes perdus (pommettes, lèvres, cernes, menton, mâchoire) ou améliorer l'hydratation et l'éclat de leur peau."
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          "Comblement des rides et sillons",
          "Restauration des volumes du visage",
          "Hydratation profonde de la peau",
          "Redéfinition des contours (lèvres, menton, mâchoire)",
          "Résultat naturel et immédiat",
          "Produit résorbable et sûr"
        ]
      }
    ],
    zonesTraitees: [
      "Sillons nasogéniens",
      "Pommettes",
      "Cernes",
      "Lèvres",
      "Menton",
      "Mâchoire",
      "Rides d'amertume"
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        "Consultation médicale et analyse du visage",
        "Désinfection de la zone à traiter",
        "Injections d'acide hyaluronique avec canule ou aiguille fine",
        "Massage doux pour homogénéiser le produit",
        "Conseils post-injection"
      ]
    },
    resultats: {
      description: "Le résultat est visible immédiatement après la séance. L'acide hyaluronique permet de combler, redessiner et hydrater la peau pour un effet naturel et harmonieux.",
      duree: "1 à 2 séances selon l'indication, entretien tous les 9 à 18 mois",
      avantApres: {
        avant: '/images/avant-apres/acide-hyaluronique-avant.png',
        apres: '/images/avant-apres/acide-hyaluronique-apres.png'
      }
    },
    effetsSecondaires: [
      "Rougeur ou gonflement temporaire",
      "Petits hématomes possibles",
      "Sensibilité au point d'injection"
    ],
    contreIndications: [
      "Grossesse et allaitement",
      "Maladies auto-immunes actives",
      "Infection ou inflammation cutanée sur la zone à traiter"
    ],
    tarifs: {
      base: 360,
      description: "Tarif par injection"
    },
    faq: [
      {
        question: "Combien de temps dure l'effet ?",
        reponse: "L'effet dure en moyenne 9 à 18 mois selon la zone et le type d'acide hyaluronique utilisé."
      },
      {
        question: "La séance est-elle douloureuse ?",
        reponse: "Les injections sont peu douloureuses grâce à l'utilisation de canules ou d'aiguilles très fines et à la présence d'anesthésiant dans le produit."
      },
      {
        question: "Quand puis-je reprendre mes activités ?",
        reponse: "Vous pouvez reprendre vos activités normales immédiatement après la séance, en évitant le sport intensif."
      }
    ]
  },
  'emslim-neo': {
    id: 'emslim-neo',
    titre: 'Radiofréquence EMSlim',
    accroche: 'Tonification musculaire et réduction de la graisse par ondes électromagnétiques',
    imageHero: '/images/soins/radiofrequence-emslim.png',
    introduction: {
      texte: "EMSlim NEO est une technologie innovante qui utilise des ondes électromagnétiques focalisées avec radiofréquence pour stimuler intensément les muscles et réduire la masse graisseuse. Une séance équivaut à 20 000 contractions musculaires !",
      pourQui: "Idéal pour les personnes souhaitant raffermir, sculpter leur silhouette ou renforcer leur plancher pelvien sans effort physique."
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          "Tonification musculaire rapide et efficace",
          "Réduction de la masse graisseuse localisée",
          "Amélioration de la silhouette",
          "Renforcement du plancher pelvien (applicateur spécifique)",
          "Procédure indolore et non invasive",
          "Aucun temps de récupération"
        ]
      }
    ],
    zonesTraitees: [
      "Abdomen",
      "Fessiers",
      "Cuisses",
      "Bras",
      "Plancher pelvien"
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        "Consultation et analyse de la zone à traiter",
        "Installation confortable sur la zone ciblée",
        "Séance de 30 minutes d'impulsions électromagnétiques",
        "Retour à la vie normale immédiatement après"
      ]
    },
    resultats: {
      description: "Les résultats sont visibles dès la 3ème séance, avec une amélioration progressive de la tonicité musculaire et une réduction de la masse grasse.",
      duree: "4 séances espacées de 3 à 7 jours, puis entretien mensuel si besoin",
      avantApres: {
        avant: '/images/avant-apres/emslim-avant.png',
        apres: '/images/avant-apres/emslim-apres.png'
      }
    },
    effetsSecondaires: [
      "Légère fatigue musculaire",
      "Sensation de courbatures possible",
      "Rougeur temporaire de la zone traitée"
    ],
    contreIndications: [
      "Grossesse",
      "Port d'un pacemaker ou implant métallique",
      "Troubles musculaires graves",
      "Maladies cardiaques sévères",
      "Chirurgie récente sur la zone à traiter"
    ],
    tarifs: {
      base: 170,
      description: "170€ la séance de 30 minutes. Forfaits disponibles pour protocole complet."
    },
    faq: [
      {
        question: "Comment fonctionne EMSlim NEO ?",
        reponse: "EMSlim NEO utilise des ondes électromagnétiques focalisées combinées à la radiofréquence pour provoquer des contractions musculaires intenses tout en ciblant la masse graisseuse. Une séance équivaut à 20 000 contractions musculaires, impossibles à réaliser lors d'un entraînement classique."
      },
      {
        question: "La séance est-elle douloureuse ?",
        reponse: "Non, la séance n'est pas douloureuse. Vous ressentirez des contractions musculaires rythmiques intenses mais non douloureuses. Certaines personnes peuvent ressentir des courbatures les jours suivants, comme après une séance de sport intense."
      },
      {
        question: "Quand les résultats sont-ils visibles ?",
        reponse: "Les premiers résultats sont généralement visibles après 3 séances. Les résultats optimaux sont obtenus après un protocole complet de 4 séances, avec une amélioration continue pendant les semaines suivantes."
      }
    ]
  },
  'epilation-laser': {
    id: 'epilation-laser',
    titre: 'Épilation Définitive au Laser Diode',
    accroche: 'Élimination efficace et durable des poils indésirables grâce à la dernière technologie Laser Diode',
    imageHero: '/images/soins/epilation-laser.jpg',
    introduction: {
      texte: 'Le Laser Diode représente l\'avancée la plus récente en matière d\'épilation définitive. Cette technologie émet une longueur d\'onde spécifique, absorbée sélectivement par la mélanine des poils, sans endommager les tissus environnants.',
      pourQui: 'Idéal pour toutes les personnes souhaitant se débarrasser durablement des poils indésirables, quelle que soit la zone du corps ou le phototype de peau.'
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          'Diminution permanente et progressive des poils',
          'Traitement rapide des grandes zones',
          'Confort optimal pendant les séances',
          'Efficacité sur tous les phototypes de peau',
          'Système de refroidissement intégré'
        ]
      }
    ],
    zonesTraitees: ['Visage', 'Aisselles', 'Bras', 'Dos', 'Torse', 'Jambes', 'Maillot'],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: ['Consultation', 'Préparation', 'Gel conducteur', 'Laser Diode', 'Soin apaisant']
    },
    resultats: {
      description: 'Les résultats sont progressifs. Réduction significative dès les 3 premières séances.',
      duree: '6 à 8 séances espacées de 6 à 8 semaines'
    },
    effetsSecondaires: ['Légère rougeur', 'Chaleur'],
    contreIndications: ['Bronzage récent', 'Grossesse'],
    tarifs: {
      base: 60,
      description: 'À partir de 60€ selon la zone (voir grille tarifaire complète sur place).'
    },
    faq: [
      {
        question: 'Est-ce douloureux ?',
        reponse: 'Le système de refroidissement intégré rend la séance très confortable.'
      }
    ]
  },
  'laser-vasculaire': {
    id: 'laser-vasculaire',
    titre: 'Laser Vasculaire',
    accroche: 'Traitement ciblé des rougeurs et vaisseaux apparents pour un teint unifié',
    imageHero: '/images/soins/laser-vasculaire.png',
    introduction: {
      texte: 'Le laser vasculaire cible l\'hémoglobine des vaisseaux dilatés sans abîmer la peau environnante.',
      pourQui: 'Idéal pour la couperose, les rougeurs ou les varicosités.'
    },
    avantages: [
      {
        titre: 'Bénéfices',
        items: ['Réduction des rougeurs', 'Teint unifié', 'Technologie non invasive']
      }
    ],
    zonesTraitees: ['Visage', 'Nez', 'Cou', 'Décolleté', 'Jambes'],
    deroulement: {
      titre: 'Séance',
      etapes: ['Nettoyage', 'Protection oculaire', 'Laser', 'Apaisement']
    },
    resultats: {
      description: 'Amélioration dès la première séance.',
      duree: '2 à 4 séances espacées de 4 à 6 semaines',
      avantApres: {
        avant: '/images/avant-apres/laser-vasculaire-avant.png',
        apres: '/images/avant-apres/laser-vasculaire-apres.png'
      }
    },
    effetsSecondaires: ['Rougeur', 'Petit oedème'],
    contreIndications: ['Soleil', 'Grossesse'],
    tarifs: {
      base: 150,
      description: 'À partir de 150€ selon l\'étendue.'
    },
    faq: [
      {
        question: 'Résultats définitifs ?',
        reponse: 'Les vaisseaux traités disparaissent, mais de nouveaux peuvent apparaître avec le temps.'
      }
    ]
  }
};

// --- LOGIQUE SEO ET RENDU (FUSIONNÉE ET CORRIGÉE POUR NEXT.JS 15) ---

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Obligatoire avec Next.js 15
  const soin = soins[slug];
  
  if (!soin) return { title: 'Soin non trouvé' };

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

export default async function SoinPage({ params, searchParams }: Props) {
  // Récupération asynchrone des paramètres (Next.js 15)
  const { slug } = await params;
  if (searchParams) await searchParams;

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
        <SoinClient soin={soin as any} />
      </main>
      <Footer />
    </>
  );
}