const { darkMode } = require("tailwindcss/stubs/defaultConfig.stub");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
