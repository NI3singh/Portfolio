/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans your files
  ],
  theme: {
    extend: {
      colors: {
          'primary': '#0A0A0A', // Deep dark background/text
          'secondary': '#007BFF', // Vibrant blue for accents
          'accent': '#61DAFB', // Light tech blue for highlights
          'light-gray': '#F3F4F6', // Backgrounds or cards
          'text-primary': '#E0E0E0', // Primary text on dark
          'text-secondary': '#B0B0B0', // Secondary text on dark
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern sans-serif
        mono: ['Roboto Mono', 'monospace'], // For code/tech
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
