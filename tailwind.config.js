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
        // Core colors
        black: '#000000',
        white: '#FFFFFF',
        
        // Grays (GR)
        gr: {
          500: '#404040',
          400: '#525252',
          300: '#A2A2A2',
          200: '#CCCCCC',
          100: '#EBEBEB',
          50: '#F1F3F4',
          25: '#F8F9FB',
        },
        
        // Neutrals (N)
        n: {
          500: '#353B46',
          400: '#464F5E',
          300: '#637085',
          200: '#8C95A8',
          100: '#AEB5C2',
          75: '#D1D5DC',
          50: '#E8EAEE',
          40: '#F4F6FA',
        },
        
        // Primary (P)
        p: {
          500: '#1D3734',
          400: '#3C6D68',
          300: '#5CA59B',
          200: '#58D7C9',
          100: '#91DFD5',
          75: '#C1E5E2',
          50: '#D8F4F2',
        },
        
        // Secondary (B)
        b: {
          500: '#0C0B3B',
          400: '#1C1876',
          300: '#2927B2',
          200: '#4D3EE0',
          100: '#7571E0',
          75: '#A391F2',
          50: '#CAC1F2',
          40: '#EAE8FB',
        },
        
        // Keep existing gray for compatibility
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