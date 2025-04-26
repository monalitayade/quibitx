/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // Pages Router (optional)
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",       // If using /src folder
  ],
  theme: {
    extend: {
      // You can add custom colors, fonts, breakpoints here
      colors: {
        primary: "#0F172A", // example
        secondary:"#10B981",
      },
      screens: {
        // Range from 360px to 639px
        // 'xs-only': { min: '360px', max: '639px' },
        
        // Range from 640px to 767px
        // 'sm-only': { min: '640px', max: '767px' },
        
        // Custom range for medium devices
        // 'sm-to-xs': { min: '360px', max: '600px' },
        'tablet': { max: '1112px'},
        'ipad': { max: '768px' },
        'mobile': { max: '640px' },
      },
    },
  },
  plugins: [],
}

