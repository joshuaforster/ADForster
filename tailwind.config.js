// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        minionPro: ['MinionPro', 'serif'],
        myriadPro: ['MyriadPro', 'sans-serif'],
        myriadProBold: ['MyriadProBold', 'sans-serif'],
        myriadProBoldIt: ['MyriadProBoldIt', 'sans-serif'],
        myriadProLight: ['MyriadProLight', 'sans-serif'],
        neutra2TextBold: ['Neutra2TextBold', 'sans-serif'],
        neutra2TextBook: ['Neutra2TextBook', 'sans-serif'],
        neutra2TextDemi: ['Neutra2TextDemi', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'], // keep the existing font
      },
      colors: {
        customBlue: '#066BCE',
        customGray: '#E4E4E3',
        lightBlue: '#55B6D9',
        fontColour: '#3B464B',
        headerGrey:'#D8D9D3',
        customGold: '#C58C49',
      },
    },
  },
  plugins: [],
}
