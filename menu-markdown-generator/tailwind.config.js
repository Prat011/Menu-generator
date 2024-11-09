/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#333',
            p: {
              marginBottom: '1rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}