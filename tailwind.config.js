/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        customHeaderDarkGg: 'rgb(51, 51, 51)',
        customHeaderGreyBg: 'rgb(212, 208, 208)',
        customBannerDivBg: 'rgba(51, 51, 51, 0.856)',
        customWhiteT: 'rgba(255, 255, 255, .76)',
        customTransparentWhite: 'rgba(255, 255, 255, 0.85)',
        customOrange: 'rgb(183, 149, 90)',
        customDarkOrange: 'rgb(161,138,77)',
      },
    },
  },
  plugins: [],
}
