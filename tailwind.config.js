/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

