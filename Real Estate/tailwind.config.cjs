/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        didact: ["'Didact Gothic'", "sans-serif"],
        work: ['"Work Sans"', "sans-serif"],
        mont: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: "#616D7E",
        shade14: "#090a0c",
        shade13: "#1d2025",
        shade12: "#30363f",
        shade11: "#434c58",
        shade10: "#576271",
        shade8: "#707b8a",
        shade7: "#808a97",
        shade6: "#9098a4",
        shade5: "#a0a7b1",
        shade4: "#b0b6be",
        shade3: "#bfc4cb",
        shade2: "#cfd3d8",
        shade1: "#dfe1e5",
      },
      boxShadow: {
        'shadow1': "0px 0px 40px 24px rgba(0,0,0,0.1)"
      }
    },
  },
  plugins: [],
}