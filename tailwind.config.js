/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f3e72",
        secondary: "rgba(255, 255, 255, 0.78)",
        secondaryText: "#8c8b8b",
        darkBlack: "#131110",
        blueBtn: "#4066ff",
        lightBlue: "#eeeeff",
        accordionShadow: "0px 23px 21px -8px rgba(136, 160, 255, 0.25)",
        cardShadow: "0 72px 49px -51px #88a0ff36",
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
        "orange-gradient": "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
        "card-gradient":
          "linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(136,160,255,.46) 217.91%)",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        "close-menu": {
          "0%": { transform: "scaleY(1)" },
          "80%": { transform: "scaleY(0.4)" },
          "100%": { transform: "scaleY(0)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.8s ease-in-out forwards",
        "close-menu": "close-menu 0.8s ease-out backwards",
      },
    },
  },
  plugins: [],
};
