/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "lexend-deca": ["Lexend Deca", "sans-serif", "system-ui"],
      inter: ["Inter", "sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        "mugen-purple-dark": "#07061e",
        "mugen-purple-navigation": "#08082126",
        "mugen-purple-white": "#565496",
      },
      boxShadow: {
        "ball-level-1": "-40px -60px 100px #932df930",
        "ball-level-2": "40px -60px 100px #932df929",
        "ball-level-3": "-40px -60px 100px #932df915",
      },
      backgroundImage: {
        "background-gradient-1":
          "url('https://cdn.pixabay.com/photo/2022/06/12/22/48/gradient-7258997_640.png')",
        "background-gradient-2":
          "url('https://cdn.pixabay.com/photo/2022/06/12/22/48/gradient-7258997_640.png')",
      },
    },
  },
  plugins: [],
};
