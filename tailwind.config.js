/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
        'sans-medium': ['Work Sans Medium', 'sans-serif'],
        'sans-semibold': ['Work Sans Semibold', 'sans-serif'],
        'urbanist-black': ['Urbanist black', 'sans-serif'],
      },
      fontSize: {
        '17': '17px',
        '20': '20px',
        '16': '16px',
        '70': '70px',
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'tighter': '-0.03em',
        'normal': '0',
      },
      lineHeight: {
        '98': '98.1%',
      },
    },
  },
  plugins: [],
}