/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 900
      },
      boxShadow: {
        'white': '0 0 8px rgba(100, 100, 100, 0.1)',
      },
    },
  },
  plugins: [],
}
