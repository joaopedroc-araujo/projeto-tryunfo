/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          100: '#444955',
          200: '#29313d',
          300: '#023031',
          400: '#052727',
        },
        white: '#fff',
        'gray-700': '#3d495c',
        'gray-100': '#f0f2f5',
        teal: '#036b52',
        mediumseagreen: '#2fc18c',
        'gray-300': '#e1e5eb',
        'gray-500': '#c5c9ce',
        firebrick: '#b01726',
        'royal-blue-500': '#003be5',
      },
      spacing: {},
      fontFamily: {
        epilogue: 'Epilogue',
        'text-base-regular': 'Verdana',
      },
      borderRadius: {
        '3xs-7': '9.7px',
        '3xs': '10px',
        '8xs': '5px',
      },
    },
    fontSize: {
      'base-6': '15.6px',
      '3xs-7': '9.7px',
      '8xl-3': '27.3px',
      '9xl': '28px',
      base: '16px',
      sm: '14px',
      xs: '12px',
      lg: '18px',
      inherit: 'inherit',
    },
  },
  corePlugins: {
    preflight: false,
  },
};
