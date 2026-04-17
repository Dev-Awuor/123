
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        obc: {
          primary: '#442363', // Deep Royal Purple
          midnight: '#2D1E3B', // Midnight Purple
          accent: '#561A8F', // Vibrant Purple
          lavender: '#D8ADFF', // Soft Lavender
          light: '#EDD9FF', // Light Lavender
          orchid: '#E5C9FF', // Pale Orchid
          offwhite: '#F8F5FB', // Off-White
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
