/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        ss: '0px 1.7px 2.6px -10px rgba(0, 0, 0, 0.075), 0px 5.6px 8.7px -10px rgba(0, 0, 0, 0.115), 0px 25px 39px -10px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        playpen: ['"Playpen Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
