/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    fontFamily : {
      Outfit : ['Outfit', 'sans']
    },
    fontSize : {
      'preset-1': ['22px', {
        lineHeight: '120%', 
        letterSpacing: '0px',
        fontWeight: '700',  
      }],
      'preset-2': ['15px', {
        lineHeight: '140%', 
        letterSpacing: '0.2px',
        fontWeight: '400',  
      }],
    },
    colors: {
      White: '#FFF',
      slate : {
        900 : '#1F314F',
        500 : '#68778D',
        300 : '#D5E1EF'
      }
    },
    extend: {
      width : {
        imgw : '288px',
      },
      height : {
        imgh : '288px'
      },
      borderRadius : {
        br20 : '20px',
        br10 : '10px',
      },
      spacing : {
        500 : '40px',
        300 : '24px',
        200 : '16px',
      },
      screens : {
        lg: '1440px',
        sm: '375px',
        sc : '320px',
        mb :  '315px',
      },
      boxShadow: {
        'boxxshadow': '0 25px 25px 0 rgba(0, 0, 0, 0,4.77%)',
      },
    },
  },
  plugins: [],
}

