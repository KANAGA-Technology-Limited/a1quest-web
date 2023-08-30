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
        primary: '#1D4ED8',
        secondary: '#F0AC27',
        success: '#059669',
        error: '#EF4444',
      },
      backgroundColor: {
        primary: '#1D4ED8',
        secondary: '#F0AC27',
        success: '#059669',
        error: '#EF4444',
      },
      borderColor: {
        primary: '#B8C0CC',
        main: '#1D4ED8',
      },
      fill: {
        primary: '#1D4ED8',
        secondary: '#F0AC27',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
      padding: {
        primary: '5vw',
        secondary: '3vw',
      },
      minHeight: {
        main: 'calc(100vh - 72px)',
      },
      outlineColor: {
        primary: '#1D4ED8',
        secondary: '#F0AC27',
      },
    },
  },
  plugins: [],
};
