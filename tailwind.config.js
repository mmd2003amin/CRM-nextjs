/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      faceBlack: "face-black",
      faceExtraBold: "face-extraBold",
      faceBold: "face-bold",
      faceExtraLight: "face-extraLight",
      faceLight: "face-light",
      faceMedium: "face-medium",
      regular: "regular",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        darker: "#020617",
        template: "#0f172a",
        box: "#1e293b",
      },

      width: {
        main: "calc(100% - 18rem)",
      },

      screens: {
        xs: "450px",
        510: "510px",
      },
    },
  },
  plugins: [],
};
