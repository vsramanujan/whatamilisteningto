module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './styles/custom.css'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'spotify-green': 'rgb(123, 200, 105)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
