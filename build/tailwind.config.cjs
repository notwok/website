/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        raisin: '#272727',
        burlywood: '#d4aa7d',
        champagne: '#efd09e',
        springbud: '#d2d8b3',
        pewter: '#90a9b7'

      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '3rem',
      }
    },
  },
  plugins: [],
}
}