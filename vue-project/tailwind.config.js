/** @type {import('tailwindcss').Config} */
export default {darkMode: 'class', // bu joy bo'lishi shart
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px', // example for extra small screens
      },
    },
  },
  plugins: [],
}
