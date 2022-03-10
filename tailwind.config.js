const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./components/landing/*.{js,ts,jsx,tsx}",
    "./components/market/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        landing: "#D43053",
        market: "#D80024",
      },
    },
  },
  plugins: [],
};
