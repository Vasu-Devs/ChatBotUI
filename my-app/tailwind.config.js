/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
  function({ addUtilities }) {
    addUtilities({
      '.scrollbar-thin': {
        '&::-webkit-scrollbar': { width: '6px', height: '6px' },
        '&::-webkit-scrollbar-track': { background: '#f1f1f1' },
        '&::-webkit-scrollbar-thumb': { background: '#888', borderRadius: '10px' },
        '&::-webkit-scrollbar-thumb:hover': { background: '#555' },
      },
    })
  }
]

}
