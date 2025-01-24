/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "montserrat",
        rubikBold: "rubikBold",
        rubikRegular: "rubikRegular",
      },
      colors: {
        primary: "rgb(var(--primary-color) / <alpha-value>)",
        secondary: "rgb(var(--secondary-color) / <alpha-value>)",
        accent: "rgb(var(--accent-color) / <alpha-value>)",
        light: "rgb(var(--light-color) / <alpha-value>)",
        dark: "rgb(var(--dark-color) / <alpha-value>)",
        dashPrimary: "rgb(var(--dashPrimary-color) / <alpha-value>)",
        dashSecondary: "rgb(var(--dashSecondary-color) / <alpha-value>)",
        dashAccent: "rgb(var(--dashAccent-color) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
