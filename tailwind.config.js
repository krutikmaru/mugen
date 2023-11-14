/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "lexend-deca": ["Lexend Deca", "sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        "mugen-purple-dark": "#07061e",
        "mugen-purple-navigation": "#080821",
      },
      boxShadow: {
        "ball-level-1": "-40px -60px 100px #932df930",
        "ball-level-2": "40px -60px 100px #932df929",
        "ball-level-3": "-40px -60px 100px #932df905",
      },
    },
  },
  plugins: [],
};
