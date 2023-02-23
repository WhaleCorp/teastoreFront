/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '40': 'repeat(40, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        '40': 'repeat(40, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}