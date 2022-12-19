/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "620px",
          },
          "@screen md": {
            maxWidth: "728px",
          },
          "@screen lg": {
            maxWidth: "1000px",
          },
          "@screen xl": {
            maxWidth: "1240px",
          },
          "@screen 2xl": {
            maxWidth: "1500px",
          },
        },
      });
    },
  ],
  daisyui: {
    themes: ["light"],
  },
};
