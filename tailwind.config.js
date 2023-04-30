
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgp-primary': '#1A3668',
      },
      backgroundImage: {
        'footer-pattern': "url('/images/footer_overlay.png')",
        'header-pattern': "url('/images/bg-gradient.png')",
        'page-title-pattern': "url('/images/page-title-gradient.png')",
        'sign': "url('/images/bg_sign.jpg')",
      }
    },
    fontFamily: {
      'sigmar': ['Sigmar', 'cursive'],
      'montserrat': ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}