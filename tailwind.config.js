/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      backgroundImage: {
        'headline': "url('/media/noise.png')",
      },
      fontFamily: {
        primary: "Mont",
        secondary: "MontSec"
      },
      rotate: {
        '17': '-90deg',
      }
    },
  },
  plugins: [],
}

