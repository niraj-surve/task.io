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
        done: '#29f64f'
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      },
      backgroundImage: {
        'paper-red': "url('./src/assets/paper-red.png')",
        'paper-green': "url('./src/assets/paper-green.png')"
      },
      gridTemplateColumns: {
        
      }
    },
  },
  plugins: [],
};
