/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "30px",
      7: "32px",
      8: "48px",
      9: "80px",
      10: "200px",
    },
    colors: {
      brown: "#78635c",
      yellow: "#dfb63b",
      white: "#fff",
    },
    extend: {},
    backgroundImage: {
      "top-bg": "url('../src/img/top.jpg')",
    },
    aspectRatio: {
      "4/3": "4 / 3",
      "1/1": "1 / 1",
    },
  },
  plugins: [],
};
