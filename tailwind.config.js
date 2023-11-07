/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backdropBlur: {
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "12px",
    },
    aspectRatio: {
      md: "3/2",
    },
  },
  plugins: [],
});
