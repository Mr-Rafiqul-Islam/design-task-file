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
        primary: '#0070f3',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        bigShoulder: ['Big Shoulders Display', 'sans-serif'],
      },
      backgroundImage:{
      'banner': "url('/src/assets/images/Background.png')",
      },
      
    },
  },
  plugins: [],
}

