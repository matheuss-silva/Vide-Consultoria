/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8DBB2E',
          hover: '#99C93A',
        },
        surface: {
          primary: '#F7F8F4',
          secondary: '#EEF4E8',
          dark: '#2C2C2C',
        },
        content: {
          primary: '#151515',
          secondary: '#7B8177',
          white: '#FFFFFF',
        },
        border: {
          soft: '#E5EADF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      }
    },
  },
  plugins: [],
}
