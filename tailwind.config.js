/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('./src/assets/background/325489479_1212154686107383_7850534301493123193_n.jpg')",
      },
      fontFamily: {
        gothic: ['century-gothic', 'san-serif'] // Adding your custom font
        // Add other font families as needed
      },
    },
  },
  plugins: [],
};