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
      },
    },
  },
  plugins: [],
};
