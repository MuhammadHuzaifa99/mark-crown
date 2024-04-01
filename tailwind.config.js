/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        baloo : ['"Baloo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

