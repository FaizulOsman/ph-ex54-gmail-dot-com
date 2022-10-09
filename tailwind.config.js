/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#70e0af",

          secondary: "#f22983",

          accent: "#a8ea62",

          neutral: "#28213B",

          "base-100": "#F7F2F7",

          info: "#5FB7F1",

          success: "#2BE3CE",

          warning: "#A86705",

          error: "#E73C72",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // theme: {
  //   extend: {},
  // },
  plugins: [require("daisyui")],
};
