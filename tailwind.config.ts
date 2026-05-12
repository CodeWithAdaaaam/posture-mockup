import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: '#3D0F0F',
        cream: '#F0E6D3',
        'near-black': '#1A0606',
        gold: '#C8A882',
        // garde compatibilité
        burgundy: {
          DEFAULT: '#5C1A1A',
          deep: '#3E1010',
          mid: '#7A2424',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      keyframes: {
        'fluid-gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-line': {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.2)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%': { opacity: '0.8', transform: 'scaleY(1.1)' },
        },
      },
      animation: {
        'fluid-gradient': 'fluid-gradient 15s ease infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'pulse-line': 'pulse-line 2s ease-in-out infinite',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config