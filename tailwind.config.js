/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fcf6f4",
          100: "#d1c6c3",
          200: "#f4dcd4",
          300: "#eac4b7",
          400: "#d8947c",
          500: "#cd8166",
          600: "#b96549",
          700: "#99543c",
          800: "#804834",
          900: "#804834",
          950: "#391f16",
        },
        background: {
          100: "#fcf8f5",
        },
      },
    },
  },
  plugins: [],
};
