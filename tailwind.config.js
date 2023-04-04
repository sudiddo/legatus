/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
        legatus: ["Alegreya Sans SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
