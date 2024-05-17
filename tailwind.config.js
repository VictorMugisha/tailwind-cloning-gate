/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        customTransparentBlack: 'rgba(0, 0, 0, 0.65)', // Adjust the opacity as needed
        customTransparentWhite: 'rgba(255, 255, 255, 0.5)', // Adjust the opacity as needed
      },
    },
  },
  plugins: [],
}
