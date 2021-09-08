module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#101010",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Neue Haas Grotesk Display"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
