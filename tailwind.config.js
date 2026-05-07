/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        google: ['"Google Sans Code"', 'monospace'],
      },
      colors: {
        brand: {
          teal: '#259ca7',
          'teal-light': '#def3f6',
          'teal-dark': '#1c7c85',
          gray: '#888888',
          'gray-dark': '#4a4a4a',
          black: '#111111',
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 7s ease-in-out 3s infinite',
        marquee: 'marquee 38s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      }
    },
  },
  plugins: [],
}

