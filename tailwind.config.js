/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        krprBlack: "#000000",
        krprGray: "#111111",
        krprWhite: "#ffffff",
        krprRed: "#ff0000",
      },
      fontFamily: {
        mono: ["Share Tech Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
