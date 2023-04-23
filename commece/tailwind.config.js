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
        blue: "#00ADB5",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
