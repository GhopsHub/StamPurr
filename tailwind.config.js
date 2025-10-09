/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        AntonSC: ["AntonSC"],
        Ultra: ["Ultra"],
        OswaldBold: ["Oswald-Bold"],
      },
    },
  },
  plugins: [],
};
