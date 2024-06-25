/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{css,js}"],
  theme: {
    extend: {
      colors: {
        'col-S': 'hsl(7, 99%, 70%)',
        'col-Y': 'hsl(51, 100%, 49%)',
        'col-DDC': 'hsl(167, 40%, 24%)',
        'col-SB': 'hsl(198, 62%, 26%)',
        'col-DMC': 'hsl(168, 34%, 41%)',
        'col-VDB': 'hsl(212, 27%, 19%)',
        'col-': 'hsl(213, 9%, 39%)',
        'col-DGB': 'hsl(232, 10%, 55%)',
        'col-GB': 'hsl(210, 4%, 67%)',
        'col-W': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        Fraunces: "Fraunces",
        Barlow: "Barlow"
      },
    },
  },
  plugins: [],
}
