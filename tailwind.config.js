const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#005555',
        'sencondary': '#F8B400',
        'gray': '#6C717A',
        'light-gray': ' #4A505C',
        'card-cream': '#FDF0CC',
        'card-blue': '#E5EEEE',
      },
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '45': '24.7%',
        '51': '76.7%',
      },
      height: {
        '11': '3.9%',
        '52': '67.1%',
      },
      padding: {
        '25': '100px',

      }
    },
  },
  plugins: [],
}

