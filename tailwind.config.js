/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        's' : '376px',
        'xs' : '1023px',
        'lg': '1024px',
        'xl' : '1430px',
      }
    },
  },
  plugins: [],
}

