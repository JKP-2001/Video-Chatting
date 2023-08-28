/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
       Rampart: ["Rampart One", "cursive"],
       gSans: ['Open Sans', "sans-serif"],
       pSans:['PT Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}