/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          600: '#2927B2',
          50: '#EAE8FB',
        },
        gray: {
          50: '#F8F9FB',
          200: '#E5E7EB',
          500: '#6B7280',
          600: '#4B5563',
          800: '#1F2937',
        }
      },
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      }
    },
  },
  plugins: [],
};