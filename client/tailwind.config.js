/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#AB6B2E",
        backgroundColor: "#FDE9CC",
        seed: "#B0B57E",
        prim: "#0f5f53",
        bluee: "#3b82f6",
        purplee: "#8e44ad",
        brownn: "#6A3E36",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      backgroundImage: {
        back: "url('/src/assets/pictures/background/back.png')",
        backfarm: "url('/src/assets/pictures/background/backfarm.jpeg')",
        farm: "url('/src/assets/pictures/background/farm.jpeg')",
        illam: "url('/src/assets/pictures/background/illam.jpg')",
        cafe: "url('/src/assets/pictures/background/cafe.jpeg')",
        backpurple: "url('/src/assets/pictures/background/backpurple.jpg')",
        aboutback: "url('/src/assets/pictures/background/aboutus.jpg')",
        processback: "url('/src/assets/pictures/background/processback.jpg')",
        processing: "url('/src/assets/pictures/background/processing.png')",
        roasting: "url('/src/assets/pictures/background/roasting.jpeg')",
        cafe: "url('/src/assets/pictures/background/cafe.jpg')",

        herobean: "url('/src/assets/pictures/coffeepics/herobean.jpg')",
        mystical: "url('/src/assets/pictures/logo.jpg')",

        person: "url('/src/assets/pictures/person/1.jpg')",
      },
      keyframes: {
        bounce: {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-30px)",
          },
          "60%": {
            transform: "translateY(-15px)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        bounce: "bounce 2s infinite",
        fade_in: "fadeIn 1.5s ease-in-out forwards",
        slide_up: "slideUp 1.5s ease-in-out forwards",
        fade_in_delayed: "fadeIn 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
