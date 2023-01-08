/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bgclr-light": "#EEE2DC",
        "bgclr-dark": "#EDC7B7",
        "fontclr-title": "#AC3B61",
      },
      fontFamily: {
        "josefin-sans": "'Josefin Sans', sans-serif",
        rye: "'Rye', cursive",
      },
    },
  },
  plugins: [],
};
