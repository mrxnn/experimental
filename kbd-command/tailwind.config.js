module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      inked: {
        300: "#A4A6AB",
        500: "#7E7E7E",
        700: "#2E2E2E",
        800: "#1C1C1C",
        900: "#101010",
      },
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
