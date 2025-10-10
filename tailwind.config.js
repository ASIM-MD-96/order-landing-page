module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '576px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        blue: '#1f2d51',
        darkBlue: '#1f2e55',
        grayishBlue: '#717fa6',
        lightGray: '#e0e8ff',
        darkGrayish: '#d6e1ff',
        darkPurple: '#382ae1',
        lightPurple: '#766cf1',
        veryLightGray: '#f7f9ff',
      },
      fontFamily: {
      sans: ['RedHatDisplay', 'sans-serif']
    },
    },
  },
  plugins: [],
}
