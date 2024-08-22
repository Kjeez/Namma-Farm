/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green":"#04773B",
        "brown":"#985E33",
        "orange":"#E87519",
        "yellow":"#FDA504",
        "light-yellow":"#FFE68E",
        "extra-light-yellow":"#FFF8E1",
        "footer":"#181818",
        "ligt-grey":"#F5F5F5",
        "light-green":"#B7D354"
      },
      fontFamily:{

      },
      backgroundImage: {
        'banner': "url('/assets/woman-harvesting-vegetables 1.png')",
        'carousal': "url('/assets/Untitled design 1.png')",
      }
    },
  },
  plugins: [],
}