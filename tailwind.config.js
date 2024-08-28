/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["poppins"],
    },
    extend: {
      keyframes: {
        blink: {
          "0%": { opacity: "100%" },
          "50%": { opacity: "0%" },
        },
      },
    },
  },
  plugins: [],
};
