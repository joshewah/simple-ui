/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background-color)',
        'background-card': 'rgb(var(--background-card)',
        'stoke-color': 'rgb(var(--stroke-color)',
        'text-color': 'rgb(var(--text-color)',
        'text-secondary-color': 'rgb(var(--text-secondary-color)',
        'text-alternate-color': 'rgb(var(--text-alternate-color)',
        'text-color--link': 'rgb(var(--text-color--link)',
      },
    },
  },
  plugins: [],
}
