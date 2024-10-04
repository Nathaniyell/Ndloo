/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tauri', 'sans-serif'],
      },
      colors:{
        dark: "#330000",
        primary1: "#550000",
        primary2: "#800000",
        primary3: "#AA0000",
        primary4: "#D40000",
        secondary: "#FF0000",
        secondary2: "#FF2B2B",
        secondary3: "#FF5555",
        secondary4: "#FF8080",
        secondary5: "#FFAAAA",
        secondary6: "#FFCCCC",
      }
    },
  },
  plugins: [],
}

