/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', serif",
      },
      boxShadow: {
        cardBoxShadow: '3px 3px #a1a1aa',
        layoutBoxShadow: '6px 6px #a1a1aa',
      },
      keyframes: {
        cardToBottomRight: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
        navButtons: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
      },
      animation: {
        navButtons: 'navButtons 2.5s cubic-bezier(.63,.08,1,0) forwards',
        cardToBottomRight: 'cardToBottomRight 3s cubic-bezier(.63,.08,1,0) forwards',
      },
    },
  },
  plugins: [],
};
