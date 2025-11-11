/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'climate-red': '#D32F2F',
        'climate-orange': '#F57C00',
        'climate-warm': '#FF6B35',
        'climate-cool': '#4A90E2',
        'climate-green': '#2E7D32',
        'climate-dark': '#1A1A1A',
      },
    },
  },
  plugins: [],
}
