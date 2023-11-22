/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',  // Custom extra-small screen size
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px', // Custom extra-large screen size
    },
  },
  plugins: [],
}}
