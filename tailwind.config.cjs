/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif']
      },
      colors: {
        'pry-clr-0': 'rgb(241, 245, 248)',
        'pry-clr-1': 'rgb(16, 42, 66)',
        'pry-clr-2': 'rgb(38, 128, 192)',
      }
    },
  },
  plugins: [],
}