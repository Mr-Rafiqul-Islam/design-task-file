/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary':'#1E1E1E',
        'para': '#999999',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'bigShoulder': ['Big Shoulders Display', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

