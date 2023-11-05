/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '208':'52rem',
        '112':'28rem',
      },
      height: {
        '208':'52rem',
        '112':'28rem',
      }
    },
    colors: {
      "transparent": "transparent",
      "white": "#FFFFFF",
      "blue-link": "#0F3DDE",
      "green-primary": "#FCFFEE",
      "green-secondary": "#98A039",
      "green-tertiary": "#3A5B22",
      "weak-grey": "#D9D9D9",
      "white": "#FFFFFF"
    },
  },
  plugins: [],
}