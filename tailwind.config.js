/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#E6007A', // Add custom shades if required
        },
      },
        fontFamily: {
          'sans': ['inter',],
          'serif': ['poppins'],
          'mono': ['nunito', 'SFMono-Regular'],
        },
    },
  },
  plugins: [
    daisyui,
  ],
}