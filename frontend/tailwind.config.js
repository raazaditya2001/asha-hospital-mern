/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          950: "#062C29",
          900: "#093F3B",
          800: "#0E5C56",
          700: "#137167",
          100: "#E4F0EC",
          50: "#F3F7F5",
        },
        marigold: {
          600: "#B97C1F",
          500: "#D99A2B",
          400: "#E4B45C",
          100: "#FBEFD9",
        },
        ink: "#16261F",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
