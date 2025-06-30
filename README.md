# Centre Esthétique Bel-Air Website

Site web moderne et élégant pour le Centre Esthétique Bel-Air, un centre de médecine esthétique haut de gamme situé à Paris Nation.

## Technologies Utilisées

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Hero Icons

## Fonctionnalités

- Design responsive et moderne
- Animations fluides et élégantes
- Navigation intuitive
- Sections principales :
  - Hero avec appel à l'action
  - Vos Besoins (par zones)
  - Nos Soins
  - Témoignages
  - Présentation du Centre
- Intégration SEO optimisée
- Formulaire de prise de rendez-vous
- Blog (à venir)

## Installation

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd centre-esthetique-bel-air
```

2. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

3. Créer un fichier `.env.local` à la racine du projet :
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_clé_api
```

4. Lancer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

5. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du Projet

```
src/
├── app/              # Pages et layouts Next.js
├── components/       # Composants React réutilisables
├── styles/          # Styles globaux et configurations
└── utils/           # Fonctions utilitaires
```

## Déploiement

Le site est configuré pour être déployé sur Vercel :

1. Connecter votre repository GitHub à Vercel
2. Configurer les variables d'environnement nécessaires
3. Déployer !

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Licence

Tous droits réservés © Centre Esthétique Bel-Air 