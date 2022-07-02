/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
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
      9: "64px",
      10: "80px",
      11: "120px",
      12: "140px",
      14: "200px",
      15: "400px",
      16: "600px",
      17: "800px",
      18: "500px",
      19: "700px",
      20: "300px",
    },
    colors: {
      brown: "#6b6c6b",
      yellow: "#dfb63b",
      white: "#fff",
      beige: "#f8f9f1",
      green: "#bfc974",
      black: "#444",
      black_h: "#212020",
    },
    fontFamily: {
      body: ["YuGothic", "Yu Gothic", "sans-serif"],
    },
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        disappear: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        appear: "appear 5s ease 1 forwards",
        disappear: "disappear 3s ease 0s 1 forwards",
      },
    },
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
