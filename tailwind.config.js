/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#00072d",
        secondary: "f5ebe0",
        accent: "#00FF7F",
        modal: "rbga(255, 255, 255, 0.01)",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        poppin: "Poppins",
        bree: "Bree Serif",
        inter: "Inter",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
