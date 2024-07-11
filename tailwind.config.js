/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        orchid: "#bc5cbc",
        black: "#000",
        violet: "#fd8bf8",
        darkslateblue: "#573568",
        lightpink: "#e9a1b6",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
    },
    fontSize: {
      "23xl": "42px",
      "6xl": "25px",
      "15xl": "34px",
      "9xl": "28px",
      "3xl": "22px",
      "39xl": "58px",
      "16xl": "35px",
      "27xl": "46px",
      "5xl": "24px",
      "13xl": "32px",
      "17xl": "36px",
      "10xl": "29px",
      "8xl": "27px",
      xl: "20px",
      lgi: "19px",
      "7xl": "26px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
