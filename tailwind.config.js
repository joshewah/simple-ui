/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background-color) / <alpha-value>)',
        'background-card': 'rgb(var(--background-card) / <alpha-value>)',
        'stoke-color': 'rgb(var(--stroke-color) / <alpha-value>)',
        'text-color': 'rgb(var(--text-color) / <alpha-value>)',
        'text-secondary-color':
          'rgb(var(--text-secondary-color) / <alpha-value>)',
        'text-alternate-color':
          'rgb(var(--text-alternative-color) / <alpha-value>)',
        'text-color--link': 'rgb(var(--text-color--link) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
