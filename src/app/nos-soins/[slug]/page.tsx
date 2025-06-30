import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Metadata from '@/components/Metadata';
import SchemaOrg from '@/components/SchemaOrg';
import SoinClient, { Soin as SoinType } from './SoinClient';

// AJOUT : Définition du type correct pour les props de la page
type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Types pour les données des soins
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

// Données des soins
const soins: Record<string, Soin> = {
  'microneedling-radiofrequence': {
    id: 'microneedling',
    titre: 'Microneedling avec Radiofréquence',
    accroche: 'Stimulation optimale du collagène pour un effet raffermissant puissant',
    imageHero: '/images/soins/microneedling.png',
    introduction: {
      texte: 'Le microneedling avec radiofréquence est une technique innovante qui combine la stimulation mécanique de la peau avec l\'énergie thermique de la radiofréquence. Cette synergie permet une stimulation profonde du collagène et de l\'élastine.',
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
        avant: '/images/avant-apres/microneedling-avant.png',
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
      pourQui: 'Idéal pour les personnes souhaitant atténuer les rides du front, les rides du lion ou les pattes d\'oie.'
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
        avant: '/images/avant-apres/botox-avant.png',
        apres: '/images/avant-apres/botox-apres.png'
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
          'Procédure rapide et peu invasive',
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
      duree: '12 à 18 mois',
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
    titre: 'EMSlim NEO avec radiofréquence',
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
      texte: 'Le Laser Diode représente l\'avancée la plus récente en matière d\'épilation définitive. Cette technologie émet une longueur d\'onde spécifique, absorbée sélectivement par la mélanine des poils, sans endommager les tissus environnants. Le Laser Diode permet une épilation plus efficace, plus confortable et adaptée à tous les types de peau.',
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
          'Système de refroidissement intégré',
          'Épiderme protégé pendant le traitement',
          'Zones traitées douces et lisses'
        ]
      }
    ],
    zonesTraitees: [
      'Visage',
      'Aisselles',
      'Bras',
      'Dos',
      'Torse',
      'Jambes',
      'Maillot'
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        'Consultation préalable et bilan personnalisé',
        'Préparation de la zone à traiter (rasage si nécessaire)',
        'Application d\'un gel conducteur',
        'Traitement par le Laser Diode',
        'Application d\'un soin apaisant post-traitement',
        'Conseils d\'entretien entre les séances'
      ]
    },
    resultats: {
      description: 'Les résultats sont progressifs et s\'améliorent au fil des séances. Une réduction significative de la pilosité est visible dès les 3 premières séances, avec une diminution permanente après un protocole complet.',
      duree: '6 à 8 séances espacées de 6 à 8 semaines selon la zone traitée'
    },
    effetsSecondaires: [
      'Légère rougeur temporaire',
      'Sensation de chaleur pendant quelques heures',
      'Sensibilité possible de la zone traitée'
    ],
    contreIndications: [
      'Bronzage récent ou exposition au soleil',
      'Certaines maladies dermatologiques',
      'Prise de médicaments photosensibilisants',
      'Grossesse et allaitement'
    ],
    tarifs: {
      base: 60,
      description: `
| Zone | Prix |
|---|---|
| Lèvres | 60€ |
| Bas du visage | 80€ |
| Aisselles | 60€ |
| Maillot simple | 50€ |
| Maillot échancré | 70€ |
| Maillot semi intégral | 80€ |
| Maillot intégral | 90€ |
| Cuisses | 150€ |
| Demi jambes | 130€ |
| Jambes complètes | 180€ |
| Demi bras | 60€ |
| Bras entier | 100€ |
| Petites zones | 60€ |
\n**Forfaits**\n
| Forfait | Prix |
|---|---|
| Demi jambes + maillot + aisselles | 240€ |
| Jambes complètes + maillot + aisselles | 300€ |
`
    },
    faq: [
      {
        question: 'Combien de séances sont nécessaires ?',
        reponse: 'En moyenne, 6 à 8 séances sont recommandées pour des résultats optimaux, espacées de 6 à 8 semaines selon la zone et le type de pilosité.'
      },
      {
        question: 'Est-ce que le traitement est douloureux ?',
        reponse: 'Le Laser Diode est reconnu pour être l\'un des traitements d\'épilation les plus confortables. La sensation est souvent décrite comme un léger picotement ou un élastique qui claque sur la peau. Le système de refroidissement intégré réduit considérablement l\'inconfort.'
      },
      {
        question: 'Quelle préparation avant une séance ?',
        reponse: 'Il est recommandé d\'éviter l\'exposition au soleil pendant les 4 semaines précédant la séance, de raser la zone 24h avant (ne pas épiler à la cire), et d\'éviter les produits irritants ou parfumés sur la zone à traiter.'
      },
      {
        question: 'L\'épilation est-elle vraiment définitive ?',
        reponse: 'Le terme "définitif" signifie une réduction permanente et significative du nombre de poils. Certains facteurs hormonaux peuvent stimuler la repousse de nouveaux poils dans certaines zones, nécessitant parfois une séance d\'entretien annuelle.'
      }
    ]
  },
  'laser-vasculaire': {
    id: 'laser-vasculaire',
    titre: 'Laser Vasculaire',
    accroche: 'Traitement ciblé des rougeurs et vaisseaux apparents pour un teint unifié',
    imageHero: '/images/soins/laser-vasculaire.png',
    introduction: {
      texte: 'Le laser vasculaire est un traitement médical qui cible spécifiquement l\'hémoglobine présente dans les vaisseaux sanguins dilatés ou superficiels. Cette technologie permet de traiter avec précision les rougeurs diffuses, la couperose, les télangiectasies et les varicosités, sans endommager les tissus environnants.',
      pourQui: 'Idéal pour les personnes présentant des rougeurs diffuses, des vaisseaux apparents sur le visage, de la couperose, ou souhaitant unifier leur teint. Convient à la plupart des phototypes cutanés.'
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          'Réduction significative des rougeurs et vaisseaux apparents',
          'Traitement précis et ciblé',
          'Séances rapides et peu inconfortables',
          'Résultats visibles dès les premières séances',
          'Amélioration durable du teint',
          'Récupération rapide',
          'Technologie non invasive'
        ]
      }
    ],
    zonesTraitees: [
      'Visage (joues, nez, ailes du nez)',
      'Cou',
      'Décolleté',
      'Jambes (petites varicosités)'
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        'Consultation préalable et diagnostic précis',
        'Nettoyage et préparation de la peau',
        'Protection des yeux par lunettes spécifiques',
        'Traitement par laser vasculaire',
        'Application d\'un soin apaisant post-traitement',
        'Conseils de protection solaire post-traitement'
      ]
    },
    resultats: {
      description: 'Les résultats sont progressifs avec une amélioration visible dès la première séance pour les vaisseaux les plus fins. Les rougeurs diffuses nécessitent généralement plusieurs séances pour un résultat optimal.',
      duree: '2 à 4 séances espacées de 4 à 6 semaines selon l\'indication',
      avantApres: {
        avant: '/images/avant-apres/laser-vasculaire-avant.png',
        apres: '/images/avant-apres/laser-vasculaire-apres.png'
      }
    },
    effetsSecondaires: [
      'Rougeur et sensation de chaleur (quelques heures)',
      'Légère œdème possible',
      'Micro-croûtes transitoires (sur les vaisseaux traités)',
      'Sensibilité cutanée temporaire'
    ],
    contreIndications: [
      'Grossesse et allaitement',
      'Exposition récente au soleil',
      'Prise de médicaments photosensibilisants',
      'Antécédents de chéloïdes',
      'Certaines pathologies cutanées actives'
    ],
    tarifs: {
      base: 150,
      description: 'À partir de 150€ selon la zone et l\'étendue du traitement.'
    },
    faq: [
      {
        question: 'Combien de séances sont nécessaires ?',
        reponse: 'Le nombre de séances varie selon l\'indication : 1 à 2 séances peuvent suffire pour des vaisseaux isolés, tandis que la couperose ou les rougeurs diffuses nécessitent généralement 3 à 4 séances.'
      },
      {
        question: 'Le traitement est-il douloureux ?',
        reponse: 'La sensation pendant le traitement est souvent décrite comme un léger picotement ou un élastique qui claque sur la peau. Un système de refroidissement intégré et l\'application d\'un gel froid rendent le traitement très tolérable.'
      },
      {
        question: 'Quelles précautions prendre après une séance ?',
        reponse: 'Il est recommandé d\'éviter l\'exposition au soleil pendant les 2 semaines suivant le traitement, d\'appliquer une protection solaire SPF50, et d\'éviter les activités provoquant une importante dilatation des vaisseaux (sport intense, sauna, hammam) pendant 48h.'
      },
      {
        question: 'Les résultats sont-ils définitifs ?',
        reponse: 'Les vaisseaux traités disparaissent définitivement, mais de nouveaux vaisseaux peuvent apparaître au fil du temps, notamment en cas de prédisposition génétique à la couperose ou d\'exposition solaire excessive.'
      }
    ]
  },
  'laser-co2-fractionne': {
    id: 'laser-co2-fractionne',
    titre: 'Laser CO2 Fractionné',
    accroche: 'Resurfaçage cutané avancé pour un rajeunissement visible et durable',
    imageHero: '/images/soins/laser-co2.jpg',
    introduction: {
      texte: 'Le laser CO2 fractionné est une technologie de pointe pour le resurfaçage cutané. Contrairement aux lasers traditionnels, la technologie fractionnée traite uniquement des micro-zones de peau, préservant des zones saines qui accélèrent la cicatrisation. Ce traitement agit en profondeur pour stimuler intensément la production de collagène et renouveler la peau.',
      pourQui: 'Idéal pour les personnes présentant des rides marquées, cicatrices d\'acné, relâchement cutané, photovieillissement important, ou souhaitant améliorer significativement la qualité globale de leur peau.'
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          'Réduction significative des rides et ridules',
          'Atténuation des cicatrices (acné, chirurgicales)',
          'Amélioration du relâchement cutané',
          'Réduction des taches pigmentaires profondes',
          'Affinement des pores dilatés',
          'Stimulation intense du collagène',
          'Résultats durables et progressifs'
        ]
      }
    ],
    zonesTraitees: [
      'Visage complet',
      'Contour des yeux',
      'Tour de la bouche',
      'Cou',
      'Décolleté',
      'Mains'
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        'Consultation préalable et bilan personnalisé',
        'Préparation cutanée spécifique pendant 2-4 semaines',
        'Application de crème anesthésiante (1 heure avant)',
        'Protection des yeux par lunettes spécifiques',
        'Traitement par laser CO2 fractionné',
        'Application de soins apaisants post-laser',
        'Remise d\'un protocole de soins post-traitement détaillé'
      ]
    },
    resultats: {
      description: 'Les résultats apparaissent progressivement au cours des 3 à 6 mois suivant le traitement, avec une amélioration continue de la qualité de la peau. La production de collagène se poursuit pendant plusieurs mois après la séance, offrant un rajeunissement cutané visible et durable.',
      duree: '1 à 3 séances espacées de 2 à 3 mois selon l\'indication',
      avantApres: {
        avant: '/images/avant-apres/laser-co2-avant.png',
        apres: '/images/avant-apres/laser-co2-apres.png'
      }
    },
    effetsSecondaires: [
      'Rougeur intense (3 à 7 jours)',
      'Œdème temporaire (2 à 4 jours)',
      'Desquamation (5 à 7 jours)',
      'Sensibilité cutanée',
      'Bronzage paradoxal (rare)'
    ],
    contreIndications: [
      'Grossesse et allaitement',
      'Exposition solaire récente ou prévue',
      'Antécédents d\'herpès (nécessite traitement préventif)',
      'Phototypes très foncés (risque de dépigmentation)',
      'Maladies auto-immunes actives',
      'Traitements immunosuppresseurs'
    ],
    tarifs: {
      base: 450,
      description: 'À partir de 450€ selon la zone traitée et l\'intensité du traitement.'
    },
    faq: [
      {
        question: 'Quelle est la différence avec les autres types de lasers ?',
        reponse: 'Le laser CO2 fractionné est considéré comme le gold standard en matière de resurfaçage cutané. Sa technologie fractionnée permet d\'obtenir des résultats comparables aux lasers ablatifs traditionnels, mais avec un temps de récupération réduit et moins d\'effets secondaires.'
      },
      {
        question: 'La séance est-elle douloureuse ?',
        reponse: 'Une crème anesthésiante est appliquée avant le traitement pour minimiser l\'inconfort. Pendant la séance, la sensation est généralement décrite comme une série de picotements chauds. Le niveau d\'inconfort dépend de la zone traitée et de l\'intensité du traitement.'
      },
      {
        question: 'Combien de temps dure la période de récupération ?',
        reponse: 'La période de récupération varie selon l\'intensité du traitement : 3 à 7 jours de rougeur, 5 à 7 jours de desquamation. Une éviction sociale de 5 à 7 jours est généralement recommandée. La peau retrouve son aspect normal après 7 à 10 jours, mais continue à s\'améliorer pendant plusieurs mois.'
      },
      {
        question: 'Quelles précautions prendre après le traitement ?',
        reponse: 'Après le traitement, il est essentiel de : suivre scrupuleusement le protocole de soins remis après la séance, éviter toute exposition solaire pendant au moins 1 mois, appliquer une protection solaire SPF50+ quotidiennement, hydrater intensément la peau, et éviter les produits irritants pendant la phase de récupération.'
      }
    ]
  },
  'laser-pigmentaire': {
    id: 'laser-pigmentaire',
    titre: 'Laser Pigmentaire',
    accroche: 'Élimination précise des taches et hyperpigmentations pour un teint unifié',
    imageHero: '/images/soins/laser-pigmentaire.jpg',
    introduction: {
      texte: 'Le laser pigmentaire est un traitement médical qui cible spécifiquement la mélanine présente dans les lésions pigmentaires. Cette technologie permet d\'éliminer efficacement les taches brunes, les lentigos solaires, les mélasmas et autres hyperpigmentations, sans affecter les tissus environnants.',
      pourQui: 'Idéal pour les personnes présentant des taches brunes liées à l\'âge ou au soleil, des lentigos solaires, des taches de rousseur, ou souhaitant uniformiser leur teint. Adapté à la plupart des phototypes cutanés avec des réglages personnalisés.'
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          'Élimination ciblée des taches pigmentaires',
          'Uniformisation du teint',
          'Traitement précis et efficace',
          'Résultats visibles en peu de séances',
          'Procédure rapide et peu invasive',
          'Amélioration de la qualité globale de la peau',
          'Récupération rapide'
        ]
      }
    ],
    zonesTraitees: [
      'Visage',
      'Cou',
      'Décolleté',
      'Mains',
      'Bras',
      'Jambes',
      'Dos'
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        'Consultation préalable et analyse des lésions pigmentaires',
        'Nettoyage et préparation de la peau',
        'Protection des yeux par lunettes spécifiques',
        'Traitement par laser pigmentaire',
        'Application d\'un soin apaisant post-traitement',
        'Conseils de photoprotection et de soins post-traitement'
      ]
    },
    resultats: {
      description: 'Les résultats sont progressifs avec un assombrissement initial des taches suivi d\'une desquamation naturelle dans les 7 à 10 jours suivant le traitement. L\'amélioration est visible après une seule séance pour les lésions superficielles.',
      duree: '1 à 3 séances espacées de 4 à 6 semaines selon le type et la profondeur des lésions',
      avantApres: {
        avant: '/images/avant-apres/laser-pigmentaire-avant.png',
        apres: '/images/avant-apres/laser-pigmentaire-apres.png'
      }
    },
    effetsSecondaires: [
      'Rougeur temporaire (quelques heures)',
      'Assombrissement des taches traitées (3 à 7 jours)',
      'Croûtelles (5 à 10 jours)',
      'Légère œdème possible'
    ],
    contreIndications: [
      'Grossesse et allaitement',
      'Exposition récente au soleil',
      'Prise de médicaments photosensibilisants',
      'Antécédents de chéloïdes',
      'Certaines pathologies dermatologiques'
    ],
    tarifs: {
      base: 180,
      description: 'À partir de 180€ selon la zone et l\'étendue du traitement.'
    },
    faq: [
      {
        question: 'Toutes les taches pigmentaires peuvent-elles être traitées ?',
        reponse: 'Le laser pigmentaire est particulièrement efficace sur les lentigos solaires, les taches de vieillesse et certaines hyperpigmentations post-inflammatoires. Le mélasma nécessite une approche plus prudente, combinant souvent le laser avec d\'autres traitements. Une consultation préalable est essentielle pour déterminer si vos taches peuvent être traitées efficacement.'
      },
      {
        question: 'Le traitement est-il douloureux ?',
        reponse: 'La sensation pendant le traitement est souvent décrite comme un léger claquement ou un élastique qui frappe la peau. La douleur est généralement minime et bien tolérée, ne nécessitant pas d\'anesthésie pour la plupart des patients.'
      },
      {
        question: 'Quelles précautions prendre après une séance ?',
        reponse: 'Il est essentiel d\'éviter l\'exposition au soleil pendant au moins 4 semaines après le traitement, d\'appliquer quotidiennement une protection solaire SPF50+, de ne pas frotter ni gratter les zones traitées, et de suivre le protocole de soins recommandé pour optimiser les résultats et minimiser les risques.'
      },
      {
        question: 'Les résultats sont-ils définitifs ?',
        reponse: 'Les lésions pigmentaires traitées disparaissent définitivement. Cependant, de nouvelles taches peuvent apparaître au fil du temps, particulièrement en cas d\'exposition solaire non protégée. Une protection solaire rigoureuse est essentielle pour maintenir les résultats à long terme.'
      }
    ]
  },
  'coussin-pelvien': {
    id: 'coussin-pelvien',
    titre: 'Coussin Pelvien EMSLIM RF',
    accroche: 'Solution innovante et non invasive pour renforcer les muscles du plancher pelvien et réduire l\'incontinence',
    imageHero: '/images/soins/coussin-pelvien.png',
    introduction: {
      texte: 'Le Coussin Pelvien EMSLIM RF est une solution technologique avancée spécialement conçue pour renforcer les muscles du plancher pelvien. Utilisant la combinaison unique d\'ondes électromagnétiques focalisées et de radiofréquence, ce traitement stimule intensément les muscles pelviens, permettant de retrouver tonicité et fonctionnalité sans effort ni inconfort.',
      pourQui: 'Particulièrement recommandé pour les femmes ayant connu un affaiblissement du plancher pelvien suite à un accouchement, une ménopause, ou simplement avec l\'âge. Idéal pour traiter l\'incontinence urinaire d\'effort, améliorer le confort intime et prévenir les prolapsus.'
    },
    avantages: [
      {
        titre: 'Bénéfices principaux',
        items: [
          'Renforcement significatif des muscles du plancher pelvien',
          'Réduction notable de l\'incontinence urinaire d\'effort',
          'Amélioration du confort et de la qualité de vie',
          'Stimulation équivalente à 20 000 contractions par séance',
          'Procédure non invasive et totalement indolore',
          'Aucun temps de récupération nécessaire',
          'Compatible avec une vie active normale'
        ]
      }
    ],
    zonesTraitees: [
      'Muscles du plancher pelvien',
      'Zone périnéale',
      'Muscles abdominaux profonds associés'
    ],
    deroulement: {
      titre: 'Déroulement de la séance',
      etapes: [
        'Consultation préalable et bilan personnalisé',
        'Installation confortable en position assise sur le coussin EMSLIM RF',
        'Séance de 30 minutes de stimulation électromagnétique',
        'Aucune préparation spécifique requise',
        'Retour immédiat aux activités quotidiennes'
      ]
    },
    resultats: {
      description: 'Les résultats se manifestent progressivement, avec une amélioration perceptible de la tonicité du plancher pelvien et une diminution des fuites urinaires dès les premières séances. L\'effet se renforce au fil du protocole complet, avec des bénéfices durables sur le contrôle de la vessie et le confort quotidien.',
      duree: '6 à 8 séances espacées de 2 à 3 jours, puis séances d\'entretien mensuelles si nécessaire',
      avantApres: {
        avant: '/images/avant-apres/coussin-pelvien-avant.png',
        apres: '/images/avant-apres/coussin-pelvien-apres.png'
      }
    },
    effetsSecondaires: [
      'Légère sensation de contractions musculaires pendant la séance',
      'Rare sensibilité temporaire de la zone traitée',
      'Fatigue musculaire légère (similaire à celle ressentie après un exercice)'
    ],
    contreIndications: [
      'Grossesse en cours',
      'Port d\'un dispositif électronique implanté (pacemaker)',
      'Chirurgie récente du plancher pelvien (moins de 6 mois)',
      'Infections urinaires ou génitales actives',
      'Certains prolapsus sévères (à évaluer lors de la consultation)'
    ],
    tarifs: {
      base: 180,
      description: 'À partir de 180€ la séance. Forfaits disponibles pour protocole complet : 6 séances à 950€.'
    },
    faq: [
      {
        question: 'Comment fonctionne le Coussin Pelvien EMSLIM RF ?',
        reponse: 'Le Coussin Pelvien EMSLIM RF utilise une technologie combinant l\'entraînement musculaire électromagnétique à haute intensité (HI-EMT) et la radiofréquence (RF). Cette synergie provoque des contractions supramaximales des muscles du plancher pelvien, impossibles à réaliser volontairement. Une séance équivaut à environ 20 000 contractions, ce qui renforce intensément la musculature pelvienne sans effort de votre part.'
      },
      {
        question: 'La séance est-elle douloureuse ou gênante ?',
        reponse: 'Non, le traitement est totalement indolore. Vous ressentirez simplement des contractions musculaires rythmiques dans la zone pelvienne, comparables à des exercices de Kegel intensifs mais sans effort. La séance se déroule habillée, en position assise confortable, sans aucune intrusion ni gêne.'
      },
      {
        question: 'Combien de séances sont nécessaires pour voir des résultats ?',
        reponse: 'La plupart des patientes rapportent une amélioration perceptible dès 3-4 séances. Pour des résultats optimaux et durables, un protocole de 6 à 8 séances est généralement recommandé, avec des séances espacées de 2 à 3 jours. Des séances d\'entretien mensuelles peuvent ensuite être proposées selon les besoins individuels.'
      },
      {
        question: 'Ce traitement remplace-t-il les exercices de Kegel traditionnels ?',
        reponse: 'Le Coussin Pelvien EMSLIM RF complète idéalement les exercices de Kegel traditionnels mais avec une efficacité démultipliée. Il permet d\'atteindre et de stimuler des fibres musculaires profondes difficiles à contracter volontairement. Pour des résultats optimaux, combiner le traitement avec des exercices réguliers est recommandé, surtout en phase d\'entretien.'
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(soins).map(slug => ({ slug }));
};

// MODIFICATION : Ajout de 'async' et utilisation du type 'Props'
export default async function SoinDetail({ params }: any) {
  const soin: SoinType = soins[params.slug];

  if (!soin) {
    notFound();
  }

  const soinUrl = `https://www.esthetique-belair.fr/nos-soins/${soin.id}`;

  return (
    <>
      <Metadata
        title={`${soin.titre} | Traitement médical esthétique`}
        description={soin.accroche}
        image={`https://www.esthetique-belair.fr${soin.imageHero}`}
        url={soinUrl}
      />
      {/* SchemaOrg n'était pas dans votre code, mais si vous l'utilisez, laissez-le */}
      <SchemaOrg
    type="MedicalProcedure" // Type de schéma pertinent pour un soin médical
    name={soin.titre}
    description={soin.accroche}
    url={soinUrl}
    image={`https://www.esthetique-belair.fr${soin.imageHero}`}
    // --- Props optionnelles mais recommandées que vous pouvez ajouter ---
    price={soin.tarifs.base}
    bodyLocation={soin.zonesTraitees}
/>
      <Navigation />
      <main className="min-h-screen">
        <SoinClient soin={soin} />
      </main>
      <Footer />
    </>
  );
}