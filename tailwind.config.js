const colors = {
  maid: {
    100: '#ff00c3',
  },
  grayshit: {
    100: '#303030',
    200: '#232323',
    300: '#202020',
    400: '#171717',
    500: '#090909',
    600: '#020202',
  },
  pamred: {
    100: '#D32F2F',
    200: '#a12222',
    300: '#6e1515',
    400: '#6e0808',
  },
}

module.exports = {
  theme: {
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      45: 45,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto',
    },
    extend: {
      colors,
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      padding: {
        '30x': '30%',
      },
      minHeight: {
        100: '100px',
        200: '200px',
        400: '400px',
      },
      borderWidth: {
        3: '3px',
        6: '6px',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem',
      },
      translate: {
        110: '30rem',
        120: '40rem',
        '-110': '-30rem',
        '-120': '-40rem',
      },
      margin: {
        110: '30rem',
        120: '40rem',
        130: '50rem',
        140: '60rem',
        '-110': '-30rem',
        '-120': '-40rem',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'odd', 'even'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'odd', 'even'],
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'group-hover',
      'odd',
      'even',
    ],
    backgroundOpacity: [
      'responsive',
      'hover',
      'focus',
      'group-hover',
      'odd',
      'even',
    ],
    backgroundImage: ['hover', 'focus'],
    visibility: ['hover', 'focus', 'group-hover', 'group-focus'],
    display: ['responsive', 'hover', 'focus', 'group-hover', 'odd', 'even'],
    animation: ['hover', 'focus', 'responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive', 'group-focus'],
    transitionDelay: ['responsive', 'group-focus'],
    transitionDuration: ['responsive', 'group-focus'],
    transitionProperty: ['responsive', 'group-focus'],
    transitionTimingFunction: ['responsive', 'group-focus'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus'],
  },
  purge: false,
}
