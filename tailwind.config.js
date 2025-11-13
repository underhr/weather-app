/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Bricolage', 'sans-serif'],
        primary: ['DMSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};