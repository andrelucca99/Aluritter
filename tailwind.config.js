/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'primary': ['"Roboto"'],
    },
    fontSize: {
      sm: '0.875rem',
      md: '1rem',
      xl: '1.75rem',
    }
  },
  plugins: [],
}

