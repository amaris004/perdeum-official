/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EBEBEB',
          300: '#D6D6D6',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        beige: {
          50: '#FDFCFB',
          100: '#FAF9F7',
          200: '#F5F3EF',
          300: '#EBE7E0',
          400: '#D8D1C5',
          500: '#B3A89A',
        },
        accent: {
          light: '#D4AF37',
          DEFAULT: '#C5A028',
          dark: '#B69121',
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'display': ['Cinzel Decorative', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};