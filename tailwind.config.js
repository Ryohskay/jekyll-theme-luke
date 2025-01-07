/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.[md,html,markdown]", 
    "./_layouts/*.html", 
    "./_includes/*.html", 
    "./_posts/*.[md,html]",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      padding: '2rem',
      margin: '2rem',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

