/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    spacing: {
      'heading': '88px',
    },
    colors: {
      transparent: 'transparent',
      bckgrnd: '#f4f4f4',
      funkyblue: '0055ff'
    }
  },
  plugins: [],
}

