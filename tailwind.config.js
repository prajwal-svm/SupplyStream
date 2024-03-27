/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  mode: "jit",
  theme: {
    extend: {
      gradientColorStops: {
        'black-blue-black': ['#000000', '#2563eb', '#000000'],
      },
    },
  },
  plugins: [],
};