/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'manrope':['"Manrope"']
      },
      colors:{
        'black':'#201F1F'
      }
    },
  },
  plugins: [],
}