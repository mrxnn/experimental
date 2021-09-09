module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#101010",
      white: "#FFFFFF",
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
