module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '10px'
    },
    extend: {
      colors: {
        dark: '#111827',
        f2: '#F2F2F2',
        white: '#FFFFFF',
        blue_primary: '#0D6EFD'
      }
    }
  },
  plugins: [],
}