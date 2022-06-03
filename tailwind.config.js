module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customwhite: {
          100: '#ffffff',
          200: '#f8f9fd',
        },
        customblue: {
          100: '#dae4fd',
          200: '#438ced',
          300: '#2f80ed',
        },
        customgray: {
          100: '#f2f2f2',
          200: '#828282',
          300: '#333333'
        }
      },
    },
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Noto Sans'
    }
  },
  plugins: [],
  important: true,
}