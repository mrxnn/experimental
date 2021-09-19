const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#101010",
      white: "#FFFFFF",
      gray: colors.trueGray,
    },
    fontFamily: {
      sans: ["Test Untitled Sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
