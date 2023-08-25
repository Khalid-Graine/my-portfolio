/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#101930",
        primary: "#E3E8F0",
        secondary: "#94A3B8",
        date: "#64748b",
        tagText: "#5EEAD4",
        tagBackground: "#2DD4BF1A",
        lienPrimary: "#39FF14",
        lienecondary: "#39FF14a6",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
