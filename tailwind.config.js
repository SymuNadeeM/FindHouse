/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'inner-about': "url('/src/app/assets/inner-pagebg.jpg')",
        
      },
      fontFamily:{
        'nunito':['Nunito Sans', "sans-serif"]
      },
      // animation: {
      //   'spin-slow': 'spin 3s linear infinite',
      //   "safelist": ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]']
      // },
      colors: {
        'primary-color': "#ff5a5f",
        'regal-blue': '#243c5a',
        "text-primary": "#484848",
        "blue":" #0d6efd",
       "indigo":" #6610f2",
       "purple":" #6f42c1",
       "pink":" #d63384",
       "red":" #dc3545",
     "orange":" #fd7e14",
    "yellow":" #ffc107",
    "green":" #198754",
    "teal":" #20c997",
    "cyan":" #0dcaf0",
    "black":" #000",
    "white":" #fff",
    "gray":" #6c757d",
    "gray-dark":" #343a40",
      },
      backgroundImage: {
        'hero-pattern': "url('/src/app/assets/banner.jpg')",
    
      }

    },
  },
  variants:{
    extend:{
       display: ['group-focus']
    }
  },
  plugins: [],
}
