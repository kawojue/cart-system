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
        'pry-clr-3': 'rgb(97, 125, 152)',
        'pry-clr-4': 'rgb(133, 198, 244)',
        'pry-clr-5': 'rgb(187, 37, 37)',
        'pry-clr-6': 'rgb(230, 107, 107)',
      }
    },
  },
  plugins: [],
}