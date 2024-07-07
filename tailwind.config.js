/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'max-420': {'max': '420px'},
        'max-640': {'max': '640px'},
        'min-420': {'min': '420px'},
        'min-576': {'min': '576px'},
      },
      colors: {
        primary: "#1E1E1E",
        para: "#999999",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        bigShoulder: ["Big Shoulders Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
