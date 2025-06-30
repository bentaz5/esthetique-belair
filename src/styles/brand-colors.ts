export const brandColors = {
  // Couleurs principales
  primary: {
    blue: '#4169E1',
    violet: '#8A2BE2',
    pink: '#E066FF',
  },
  // Variantes sombres (pour les hover states)
  dark: {
    blue: '#3451B4',
    violet: '#6E22B4',
    pink: '#C048D8',
  },
  // Dégradés officiels
  gradients: {
    primary: 'linear-gradient(to right, #4169E1, #8A2BE2, #E066FF)',
    secondary: 'linear-gradient(to right, #E066FF, #8A2BE2, #4169E1)',
    primaryHover: 'linear-gradient(to right, #3451B4, #6E22B4, #C048D8)',
    secondaryHover: 'linear-gradient(to right, #C048D8, #6E22B4, #3451B4)',
  },
} as const;

// Usage des couleurs dans le design system
export const designTokens = {
  buttons: {
    primary: {
      background: brandColors.gradients.primary,
      backgroundHover: brandColors.gradients.primaryHover,
    },
    secondary: {
      background: brandColors.gradients.secondary,
      backgroundHover: brandColors.gradients.secondaryHover,
    },
  },
  // Autres éléments de design utilisant ces couleurs
  accents: {
    links: brandColors.primary.violet,
    highlights: brandColors.primary.pink,
    icons: brandColors.primary.blue,
  },
} as const; 