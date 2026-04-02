/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 7s ease-in-out 3s infinite',
      }
    },
  },
  plugins: [],
}

