import svgr from "vite-plugin-svgr";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0458F6",
        secondary: "#000000",
        common: "#ffffff",
      },
    },
  },
  plugins: [svgr()],
};
