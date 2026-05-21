/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C2410C", // Burnt Copper / Deep Orange - Sophisticated dimmed techie orange
        "primary-dark": "#9A3412", // Dark Rust for borders and hover states
        "background-light": "#FAFAFA", // Crisp, clean white
        "background-dark": "#18181B" // Deep charcoal black
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  darkMode: "class",
  plugins: []
}