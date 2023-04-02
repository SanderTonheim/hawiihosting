/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}',  './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'sliderOne' : "url('../public/images/landingPage/business-slide.jpg')",
        'ecologyCity' : "url('../public/images/landingPage/ecology-city.jpg')"
      },
      screens: { xxs: '375px', xs: '425px' },
    },
  },
  plugins: [],
}
