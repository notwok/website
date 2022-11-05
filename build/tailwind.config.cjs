/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{html,js}",
  './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      // colors: {
      //   raisin: '#272727',
      //   burlywood: '#d4aa7d',
      //   champagne: '#efd09e',
      //   springbud: '#d2d8b3',
      //   pewter: '#90a9b7'

      // },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '3rem',
      },
      center: true,
    },
  },
  
},
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
  daisyui: {
    styled: false,
    themes: ["business"],
    base: true,
    utils: false,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}