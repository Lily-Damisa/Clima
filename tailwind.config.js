/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'hero-pattern': "url('/assets/weather-img.jpg')"
      // },
      backgroundColor: {
        'black': "rgb(0 0 0)"
      }
      // fontFamily: {
      //   montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans]
      // }
    },
  },
  plugins: [],
}
