/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
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
        
        // Kobe (K)
        k: {
          500: '#491F08',
          400: '#913D1C',
          300: '#DA5C30',
          200: '#F6814B',
          100: '#EBA47F',
          75: '#F0C1A8',
          50: '#F7E1D4',
        },
        
        // Brown (BR)
        br: {
          500: '#4A350F',
          400: '#956727',
          300: '#E09E3E',
          200: '#F8BA4B',
          100: '#FACD78',
          75: '#F5DDAB',
          50: '#FBEDD5',
        },
        
        // Red (R) - Semantic
        r: {
          500: '#C40F24',
          400: '#EF233C',
          300: '#F14458',
          200: '#F36374',
          100: '#F9B1B9',
          75: '#FCD9DD',
          50: '#FFE9EB',
        },
        
        // Yellow (Y) - Semantic
        y: {
          500: '#C24B00',
          400: '#DF6E38',
          300: '#FF8B00',
          200: '#FFCD92',
          100: '#FFFAE6',
        },
        
        // Green (G) - Semantic
        g: {
          500: '#006644',
          400: '#4B6479',
          300: '#36B37E',
          200: '#85DBBE',
          100: '#E6F9F3',
        },
        
        // Keep existing gray for compatibility
        gray: {
          50: '#F8F9FB',
          200: '#E5E7EB',
          500: '#6B7280',
          600: '#4B5563',
          800: '#1F2937',
        },
        
        // shadCN color variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        '2xl': '12px',
        'rounded': '9999px',
      },
      boxShadow: {
        'focus-normal': '0 0 0 2px #4D3EE0, 0 0 0 3px rgba(174, 181, 194, 0.3)',
        'focus-medium': '0 0 0 2px #4D3EE0, 0 0 0 8px rgba(202, 193, 242, 0.4)',
        'app-switcher': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      }
    },
  },
  plugins: [],
};