// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue,css,scss}'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        'grey-100': '#f7fafb',

        primary: {
          100: '#3c40a4',
          200: '#4B4AA5',
        },

        grey: {
          100: '#f7fafb',
        },

        font: {
          100: '#1B2235',
          200: '#9EA6B8',
          300: '#081132',
        },
      },
    },
  },
  plugins: [],
};
