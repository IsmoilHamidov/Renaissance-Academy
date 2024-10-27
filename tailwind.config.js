/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': "#EAF4FF",
        'dark-blue': "#2189FF",
        'lighter-black': "#0B2441",   
      },
      fontSize: {
        'title-size': "1.75rem",
      }
    },
  },
  plugins: [],
}

