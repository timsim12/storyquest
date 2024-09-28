/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            fredoka: ['Fredoka']
        },
        gridTemplateColumns: {
            'fit': 'repeat(auto-fit, minmax(240px, 1fr))'
        }
    },
  },
  plugins: [],
}