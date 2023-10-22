/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#032129",
        secondary: "#013340",
        dimWhite: "rgba(255, 255, 225, 0.7)",
        dimBlue: "#065fd4",
      },

    },
    fontFamily: {
      kantumruyPro: ["Kantumruy Pro", "sans-serif"]
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
}

