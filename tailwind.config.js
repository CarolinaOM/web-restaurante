// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // Esta línea le dice a Tailwind que escanee todos tus archivos .tsx y .css en la carpeta src
    "./src/**/*.{js,ts,jsx,tsx,css}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}