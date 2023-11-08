/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-1": "url('../assets/homepage-bg-1.jpg')",
      },
    },
  },
  plugins: [],
};
