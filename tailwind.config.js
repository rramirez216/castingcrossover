/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playpen: ['"Playpen Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
