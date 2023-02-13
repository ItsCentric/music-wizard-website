/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9030FF',
        secondary: '#37BEAC',
      },
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
