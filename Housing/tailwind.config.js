/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors:{
      primary: "#0061E0",
      secondary: "#0D263B",
      black: "#0A0A0A",
      white: "#FFFFFF",
      gray: "#7C8893",
      ash: "#F4F9FF",
      lightblue: "#E2EFFF",
    },
    fontFamily: {
      sans: "inter"
    },
    container: {
      padding: "10rem"
    },
    // lineHeight: {
    //   leading
    // }
    extend: {},
  },
  plugins: [],
}

