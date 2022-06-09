module.exports = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sea-blue': {
          '900': '#15192A',
          '800': '#191D31',
          '700': '#1C2138',
          '600': '#20253F',
          '500': '#232946',
          '400': '#393E59',
          '300': '#4F546B',
          '200': '#65697E',
          '100': '#7B7F90',
        },
        'sea-pink': {
          '500': '#be969c',
          '400': '#d6a8b0',
          '300': '#eebbc3',
          '200': '#f0c2c9',
          '100': '#f1c9cf'
        },
        'sea-foam-blue': {
          '500': '#939abd',
          '400': '#a6aed4',
          '300': '#b8c1ec',
          '200': '#bfc7ee',
          '100': '#c6cdf0',
        },
        'sea-white':  {
          '400': '#b3b3b2',
          '300': '#cccccb',
          '200': '#e6e6e5',
          '100': '#fffffe',
        },
        'sea-sand': {	
          '900': '#B2ACA0',
          '800': '#CBC5B6',
          '700': '#E5DDCD',
          '600': '#fef6e4',
          '500': '#FEF7E7',
          '400': '#FEF8E9',
          '300': '#FEF9EC',
        },
        'sea-peach': {
          '900': '#927E74',
          '800': '#AA9387',
          '700': '#C2A89A',
          '600': '#DBBDAE',
          '500': '#f3d2c1',
          '400': '#F4D7C7',
          '300': '#F5DBCD',
          '200': '#F7E0D4',
          '100': '#F8E4DA',
        },
        'sea-sky': {
          '900': '#537f85',
          '800': '#61949b',
          '700': '#6fa9b1',
          '600': '#7dbec7',
          '500': '#0065cb',
          '400': '#97D7E0'	,
          '300': '#A2DCE4'	,
          '200': '#AEE0E7',
          '100': '#B9E5EB',
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
