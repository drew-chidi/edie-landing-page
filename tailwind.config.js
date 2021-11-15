module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};