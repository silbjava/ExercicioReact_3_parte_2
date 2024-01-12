/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        ham: ['16px', '19.36px'],
        content:['8px','9.68px'],
        button:['10px','12.1px']
      },
      colors: {
        'violet7': '#6538E5'
      },
      height:{
        '38.2':'9.5625rem',
        '15': '3.75rem'
      },
      width:{
        '35.2':'8.8125rem',
        '33.7':'8.438rem'
      },
      padding: {
        '2.7': '11px',
      },
      margin: {
        '18.7': '4.688rem'
      }
    },
  },
  plugins: [],
}