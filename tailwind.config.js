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
        primaryDark: '#0C1F56',
        secondary: '#F0AC27',
        success: '#059669',
        error: '#DC2626',
      },
      backgroundColor: {
        primary: '#1D4ED8',
        primaryDark: '#0C1F56',
        secondary: '#F0AC27',
        success: '#059669',
        error: '#DC2626',
      },
      borderColor: {
        primary: '#B8C0CC',
        main: '#1D4ED8',
      },
      fill: {
        primary: '#1D4ED8',
        primaryDark: '#0C1F56',
        secondary: '#F0AC27',
        error: '#DC2626',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-mulish)'],
      },
      padding: {
        primary: '4vw',
        secondary: '2vw',
      },
      minHeight: {
        main: 'calc(100vh - 72px)',
      },
      outlineColor: {
        primary: '#1D4ED8',
        primaryDark: '#0C1F56',
        secondary: '#F0AC27',
      },
      screens: {
        '3xl': '1920px',
      },
      listStyleType: {
        'lower-alpha': 'lower-alpha',
      },
    },
  },
  plugins: [],
};
