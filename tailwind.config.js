/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0088CC',
        'primary-background': '#212121',
        'secondary-background': '#252424'
      }
    },
    fontFamily: {
      'great-vibes': ['Great Vibes', 'cursive']
    }
  },
  plugins: [],
}