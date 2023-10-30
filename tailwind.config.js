/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px', 
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Cinzel', 'serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      mytheme: {
          
        "primary": "red",
                 
        "secondary": "#f000b8",
                 
        "accent": "#1dcdbc",
                 
        "neutral": "#2b3440",
                 
        "base-100": "#ffffff",
                 
        "info": "#3abff8",
                 
        "success": "#36d399",
                 
        "warning": "#fbbd23",
                 
        "error": "#f87272",
                 },
    },
    mytheme: {
          
      "primary": "#FF9130",
               
      "secondary": "#FF9130",
               
      "accent": "#FF9130",
               
      "neutral": "#1b161d",
               
      "base-100": "#484351",
               
      "info": "#96a8e8",
               
      "success": "#69ecba",
               
      "warning": "#b07b11",
               
      "error": "#f94848",
               },
  },
  plugins: [require("daisyui")],

}