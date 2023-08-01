/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#8000D7',
        success: '#17B28D',
        secondary: '#F3EDFC',
        error: '#EB4335',
      },
      backgroundColor: {
        primary: '#8000D7',
        secondary: '#F3EDFC',
        error: '#EB4335',
      },
      borderColor: {},
      fontFamily: {
        primary: 'Inter, sans-serif',
        secondary: 'Open Sans, sans-serif',
      },
      padding: {
        primary: '5vw',
      },
      minHeight: {
        main: 'calc(100vh - 80px)',
      },
      outlineColor: {
        primary: '#8000D7',
      },
    },
  },
  plugins: [],
}
