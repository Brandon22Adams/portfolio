/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss,css}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B3FA0',
        secondary: '#EFBF04',
        tertiary: '#F2F2F5',
        background: '#1C1B22',
        lightText: '#E8DFF5'
      }
    },
    screens: {
      'mobile': { 'max': '767' },
    }
  },
  plugins: [],
  important: true,
}
