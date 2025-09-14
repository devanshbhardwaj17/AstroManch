  /** @type {import('tailwindcss').Config} */
  export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          spinSlow: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
        animation: {
          spinSlow: 'spinSlow 25s linear infinite', // slower rotation
          spinFast: 'spinSlow 0.5s linear infinite', // super fast
        },
    },
  },
    plugins: [],
  }

