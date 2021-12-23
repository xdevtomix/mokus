module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'alcatel-v': '600px',
      'ipad-v': '768px',
      'ipad-h': '1024px',
      'win': '1536px',
      'laptop': '1920px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
