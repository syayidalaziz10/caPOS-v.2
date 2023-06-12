/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    colors: {
      'primary':'#8FD2A7 !important',
      'secondary' : '#E3F3E8 !important',
      'content' : '#F4F6F8  !important',
      'caption' : '#353535 !important',
      'fill' : '#FFFFFF !important',
      'color-1' : '#52B69A !important',
      'color-2' : '#34A0A3 !important',
      'color-3' : '#158AAD !important',

    },
    fontFamily: {
      body: ['Montserrat']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
