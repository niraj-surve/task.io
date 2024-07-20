/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FB4D3D',
        secondary: '#FFB703',
        dark: '#4c5454',
        muted: '#7b7b82',
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      },
      gridTemplateColumns: {
        
      }
    },
  },
  plugins: [],
};
