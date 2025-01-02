/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.[md,html,markdown]", 
    "./_layouts/*.html", 
    "./_includes/*.html", 
    "./_posts/*.[md,html]",
  ],
  theme: {
    container: {
      padding: '2rem',
      margin: '2rem',
    },
    extend: {},
  },
  plugins: [],
}

