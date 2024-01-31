/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'md-1000':'1000px',
      },
      borderRadius:{
        '5xl':'4rem',
      }
    },
  },
  plugins: [],
}
