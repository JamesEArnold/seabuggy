module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        toggleTheme: 'toggleTheme 350ms ease-in-out 1',
        toggleThemeReverse: 'toggleThemeReverse 350ms ease-in-out 1',
        loadingLine: 'loadingLine 6s ease-in 1',
        slideOutTop: 'slideOutTop 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
      },
      keyframes: {
        toggleTheme: {
          '0%': { left: '16px', width: '20px' },
          '60%': { left: '8px', width: '28px' },
          '100%': { left: '0px' },
        },
        toggleThemeReverse: {
          '0%': { left: '0px' },
          '60%': { left: '0px', width: '28px' },
          '100%': { left: '16px' },
        },
        loadingLine: {
          '0%': {
            width: '100%',
          },
          '100%': {
            width: '5px',
          },
        },
        slideOutTop: {
          '0%': {
            '-webkit-transform': 'translateY(10px)',
            transform: 'translateY(10px)',
            opacity: 1,
          },
          '12%': {
            '-webkit-transform': 'translateY(20px)',
            transform: 'translateY(20px)',
            opacity: 1,
          },
          '25%': {
            '-webkit-transform': 'translateY(0px)',
            transform: 'translateY(0px)',
            opacity: 1,
          },
          '100%': {
            '-webkit-transform': 'translateY(-1000px)',
            transform: 'translateY(-1000px)',
            opacity: 0,
          },
        },
      },
      colors: {
        'sea-blue': {
          900: '#15192A',
          800: '#191D31',
          700: '#1C2138',
          600: '#20253F',
          500: '#232946',
          400: '#393E59',
          300: '#4F546B',
          200: '#65697E',
          100: '#7B7F90',
        },
        'sea-pink': {
          500: '#be969c',
          400: '#d6a8b0',
          300: '#eebbc3',
          200: '#f0c2c9',
          100: '#f1c9cf',
        },
        'sea-foam-blue': {
          700: '#767b97',
          600: '#848baa',
          500: '#939abd',
          400: '#a6aed4',
          300: '#b8c1ec',
          200: '#bfc7ee',
          100: '#c6cdf0',
        },
        'sea-white': {
          400: '#b3b3b2',
          300: '#cccccb',
          200: '#e6e6e5',
          100: '#fffffe',
        },
        'sea-sand': {
          900: '#B2ACA0',
          800: '#CBC5B6',
          700: '#E5DDCD',
          600: '#fef6e4',
          500: '#FEF7E7',
          400: '#FEF8E9',
          300: '#FEF9EC',
        },
        'sea-peach': {
          900: '#927E74',
          800: '#AA9387',
          700: '#C2A89A',
          600: '#DBBDAE',
          500: '#f3d2c1',
          400: '#F4D7C7',
          300: '#F5DBCD',
          200: '#F7E0D4',
          100: '#F8E4DA',
        },
        'sea-sky': {
          900: '#537f85',
          800: '#61949b',
          700: '#6fa9b1',
          600: '#7dbec7',
          500: '#0065cb',
          400: '#97D7E0',
          300: '#A2DCE4',
          200: '#AEE0E7',
          100: '#B9E5EB',
        },
      },
      scale: {
        200: '2',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
