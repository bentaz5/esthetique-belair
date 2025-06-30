export interface Soin {
  id: string;
  titre: string;
  accroche: string;
  imageHero: string;
  introduction: {
    texte: string;
    pourQui: string;
  };
  avantages: Array<{
    titre: string;
    items: string[];
  }>;
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
  faq: Array<{
    question: string;
    reponse: string;
  }>;
  typesPeelings?: Array<{
    intensite: string;
    nom: string;
    description: string;
    indications: string[];
  }>;
}

export const soins: Record<string, Soin> = {
  'microneedling-radiofrequence': {
    id: 'microneedling-radiofrequence',
    titre: 'Microneedling avec radiofréquence',
    accroche: '',
    imageHero: '/images/soins/microneedling.png',
    introduction: { texte: '', pourQui: '' },
    avantages: [{ titre: '', items: [] }],
    zonesTraitees: [],
    deroulement: { titre: '', etapes: [] },
    resultats: { description: '', duree: '' },
    effetsSecondaires: [],
    contreIndications: [],
    tarifs: { base: 0, description: '' },
    faq: []
  },
  'acide-hyaluronique': {
    id: 'acide-hyaluronique',
    titre: 'Acide hyaluronique',
    accroche: '',
    imageHero: '/images/soins/acide-hyaluronique.png',
    introduction: { texte: '', pourQui: '' },
    avantages: [{ titre: '', items: [] }],
    zonesTraitees: [],
    deroulement: { titre: '', etapes: [] },
    resultats: { description: '', duree: '' },
    effetsSecondaires: [],
    contreIndications: [],
    tarifs: { base: 0, description: '' },
    faq: []
  },
  'botox': {
    id: 'botox',
    titre: 'Botox',
    accroche: '',
    imageHero: '/images/soins/botox.png',
    introduction: { texte: '', pourQui: '' },
    avantages: [{ titre: '', items: [] }],
    zonesTraitees: [],
    deroulement: { titre: '', etapes: [] },
    resultats: { description: '', duree: '' },
    effetsSecondaires: [],
    contreIndications: [],
    tarifs: { base: 0, description: '' },
    faq: []
  },
  'hifu': {
    id: 'hifu',
    titre: 'Ultrasons focalisés',
    accroche: '',
    imageHero: '/images/soins/hifu.png',
    introduction: { texte: '', pourQui: '' },
    avantages: [{ titre: '', items: [] }],
    zonesTraitees: [],
    deroulement: { titre: '', etapes: [] },
    resultats: { description: '', duree: '' },
    effetsSecondaires: [],
    contreIndications: [],
    tarifs: { base: 0, description: '' },
    faq: []
  },
  'peelings': {
    id: 'peelings',
    titre: 'Peelings Médicaux',
    accroche: '',
    imageHero: '/images/soins/peeling-medical.png',
    introduction: { texte: '', pourQui: '' },
    avantages: [{ titre: '', items: [] }],
    zonesTraitees: [],
    deroulement: { titre: '', etapes: [] },
    resultats: { description: '', duree: '' },
    effetsSecondaires: [],
    contreIndications: [],
    tarifs: { base: 0, description: '' },
    faq: [],
    typesPeelings: [
      { intensite: 'Moyen/Superficiel', nom: 'Acide glycolique', description: 'Amélioration texture et éclat', indications: [] },
      { intensite: 'Moyen/Fort', nom: 'TCA', description: 'Renouvellement cutané profond', indications: [] },
      { intensite: 'Variable', nom: 'Dépigmentant', description: 'Solution spécifique pour les taches', indications: [] }
    ]
  },
  'emslim-neo': {
    id: 'emslim-neo',
    titre: 'EMSlim NEO avec radiofréquence',
    accroche: '',
    imageHero: '/images/soins/emslim-neo.png',
    introduction: { texte: '', pourQui: '' },
    avantages: [{ titre: '', items: [] }],
    zonesTraitees: [],
    deroulement: { titre: '', etapes: [] },
    resultats: { description: '', duree: '' },
    effetsSecondaires: [],
    contreIndications: [],
    tarifs: { base: 0, description: '' },
    faq: []
  },
  'coussin-pelvien': {
    id: 'coussin-pelvien',
    titre: 'Coussin pelvien',
    accroche: '',
    imageHero: '/images/soins/coussin-pelvien.png',
    introduction: { texte: '', pourQui: '' },
    avantages: [{ titre: '', items: [] }],
    zonesTraitees: [],
    deroulement: { titre: '', etapes: [] },
    resultats: { description: '', duree: '' },
    effetsSecondaires: [],
    contreIndications: [],
    tarifs: { base: 0, description: '' },
    faq: []
  },
  'botox-hyperhidrose': {
    id: 'botox-hyperhidrose',
    titre: 'Botox pour transpiration excessive',
    accroche: '',
    imageHero: '/images/soins/injection-botox-aisselles.png',
    introduction: { texte: '', pourQui: '' },
    avantages: [{ titre: '', items: [] }],
    zonesTraitees: [],
    deroulement: { titre: '', etapes: [] },
    resultats: { description: '', duree: '' },
    effetsSecondaires: [],
    contreIndications: [],
    tarifs: { base: 0, description: '' },
    faq: []
  },
  'epilation-laser': {
    id: 'epilation-laser',
    titre: 'Épilation définitive au Laser Diode',
    accroche: '',
    imageHero: '/images/soins/epilation-laser.png',
    introduction: { texte: '', pourQui: '' },
    avantages: [{ titre: '', items: [] }],
    zonesTraitees: [],
    deroulement: { titre: '', etapes: [] },
    resultats: { description: '', duree: '' },
    effetsSecondaires: [],
    contreIndications: [],
    tarifs: { base: 0, description: '' },
    faq: []
  },
  'laser-vasculaire': {
    id: 'laser-vasculaire',
    titre: 'Laser vasculaire',
    accroche: '',
    imageHero: '/images/soins/laser-vasculaire.png',
    introduction: { texte: '', pourQui: '' },
    avantages: [{ titre: '', items: [] }],
    zonesTraitees: [],
    deroulement: { titre: '', etapes: [] },
    resultats: { description: '', duree: '' },
    effetsSecondaires: [],
    contreIndications: [],
    tarifs: { base: 0, description: '' },
    faq: []
  }
}; 