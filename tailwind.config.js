const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './styles/custom.css'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'spotify-green': 'rgb(123, 200, 105)'
      },
      boxShadow: {
        white: '0 4px 14px 0 rgba(255, 255, 255, 0.39)',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['dark']
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
