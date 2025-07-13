/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      colors: {
        'blue-700': '#1D4ED8',
        'blue-800': '#1E40AF',
        'red-600': '#DC2626',
        'red-700': '#B91C1C',
        'white': '#FFFFFF',
        'gray-800': '#1F2937',
        'zinc-900': '#111827',
        'slate-800': '#374151',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'background-color': 'background-color',
        'transform': 'transform',
      },
      transitionDuration: {
        '200': '200ms',
        '500': '500ms',
      },
      scale: {
        '105': '1.05',
        '110': '1.10',
      },
      dropShadow: {
        'lg': '0 10px 15px rgba(0, 0, 0, 0.2)',
      },
      opacity: {
        '90': '0.9',
        '80': '0.8',
      },  

    },
  },
  plugins: [],
}

