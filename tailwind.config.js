/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.{css,js}'],
  theme: {
    extend: {
      colors: {
        'col-header': 'hsl(200, 100, 62)',
        'col-footer': 'hsl(167, 44, 70)',
        'col-SR': 'hsl(7, 99%, 70%)',
        'col-Y': 'hsl(51, 100%, 49%)',
        'col-DDC': 'hsl(167, 40%, 24%)',
        'col-DB': 'hsl(198, 62%, 26%)',
        'col-DMC': 'hsl(168, 34%, 41%)',
        'col-VDB': 'hsl(212, 27%, 19%)',
        'col-VDGB': 'hsl(213, 9%, 39%)',
        'col-DGB': 'hsl(232, 10%, 55%)',
        'col-GB': 'hsl(210, 4%, 67%)',
        'col-W': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        Fraunces: "Fraunces",
        Barlow: "Barlow"
      },
      backgroundImage: {
        'img-header-mb': "url('/src/assets/mobile/image-header.jpg')",
        'img-section1-mb': "url('/src/assets/mobile/image-graphic-design.jpg')",
        'img-section2-mb': "url('/src/assets/mobile/image-photography.jpg')",
        'img-section1-dk': "url('/src/assets/desktop/image-graphic-design.jpg')",
        'img-section2-dk': "url('/src/assets/desktop/image-photography.jpg')"
      },
    },
  },
  plugins: [],
}

