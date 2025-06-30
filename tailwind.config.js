/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4169E1',
          violet: '#8A2BE2',
          pink: '#E066FF',
          'blue-dark': '#3451B4',
          'violet-dark': '#6E22B4',
          'pink-dark': '#C048D8',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        primary: '#8A2BE2',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #4169E1, #8A2BE2, #E066FF)',
        'gradient-brand-reverse': 'linear-gradient(to right, #E066FF, #8A2BE2, #4169E1)',
        'gradient-brand-hover': 'linear-gradient(to right, #3451B4, #6E22B4, #C048D8)',
        'gradient-brand-reverse-hover': 'linear-gradient(to right, #C048D8, #6E22B4, #3451B4)',
      },
      keyframes: {
        "trail": {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
      },
      animation: {
        "trail": "trail var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
} 