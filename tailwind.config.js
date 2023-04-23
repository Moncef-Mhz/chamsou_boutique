/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        blue: "#00ADB5",
        white: "#fff",
      },
      backgroundColor: {
        primary: "#222831",
        secondary: "#393E46",
        // blue: "#05BFDB",
        darkblue: "#F9D949",
        white: "#fff",
        // black: "#332F2E",
        // red: "#E64848",
        // // green: "#38E54D",
        // orange: "#FF6000",
        // grey: "#F1F6F9",
        // beige: "#FFDCB6",
        // purple: "#9384D1",
        // yellow: "#F9D949",
      },
    },
  },
  plugins: [],
};
