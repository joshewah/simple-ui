/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        "background-secondary": "#FAFAFA",
        "accent-stroke": "#E5E5E5",
        text: "#18171C",
        "text-secondary": "#414046",
        "text-tertiary": "#727178",
        "dark--background": "#09090B",
        "dark--background-secondary": "#18171C",
        "dark--accent-stroke": "#27272A",
        "dark--text": "#FFFFFF",
        "dark--text-secondary": "#D4D4D8",
        "dark--text-tertiary": "#717179",
      },
    },
  },
  plugins: [],
};
