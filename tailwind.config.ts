import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './App.tsx',
  ],
  theme: {
    extend: {
      colors: {
        // Matches your specific brand orange and deep black themes
        orange: {
          500: '#ff8c00',
          600: '#ea580c',
          800: '#9a3412',
        },
        black: '#050505',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'ping-slow': {
          '75%, 100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        shimmer: 'shimmer 5s linear infinite',
        'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
