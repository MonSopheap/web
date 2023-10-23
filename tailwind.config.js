/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#032129",
        secondary: "#013340",
      },

    },
    fontFamily: {
      kantumruyPro: ["Kantumruy Pro", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
  ],
}

