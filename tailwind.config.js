/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Sophisticated and Minimal
        'brand-black': '#1A1A1A', // Deep, rich black - Prada's signature
        'brand-white': '#FEFEFE', // Pure, crisp white
        'brand-charcoal': '#2C2C2C', // Elegant dark gray
        
        // Emerald Accent (refined)
        'emerald-primary': '#1B4F3C', // Deeper, more sophisticated emerald
        'emerald-light': '#2D6B54',
        'emerald-dark': '#0F2F22',

        // Neutral Palette - Ultra Minimal
        'stone-50': '#FAFAF9',
        'stone-100': '#F5F5F4', 
        'stone-200': '#E7E5E4',
        'stone-300': '#D6D3D1',
        'stone-400': '#A8A29E',
        'stone-500': '#78716C',
        'stone-600': '#57534E',
        'stone-700': '#44403C',
        'stone-800': '#292524',
        'stone-900': '#1C1917',

        // Accent Colors - Luxurious but Subtle
        'gold-accent': '#C5985A', // Refined gold
        'gold-light': '#E5C085',
        'gold-dark': '#A17C47',
        
        // Text Colors
        'text-primary': '#1A1A1A',
        'text-secondary': '#57534E',
        'text-tertiary': '#78716C',
        'text-inverse': '#FEFEFE',
      },
      fontFamily: {
        // Primary Typography - Prada inspired
        'display': ['Playfair Display', 'serif'], // Elegant serif for headlines
        'sans': ['Inter', 'system-ui', 'sans-serif'], // Clean, modern sans-serif
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'], // For special cases
      },
      fontSize: {
        // Typographic Scale - Prada-inspired hierarchy
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.025em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        'luxury': '0.15em', // For luxury brand styling
      },
      spacing: {
        // Sophisticated spacing system
        '18': '4.5rem',
        '88': '22rem',
        '104': '26rem',
        '128': '32rem',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Sophisticated easing
        'prada': 'cubic-bezier(0.4, 0, 0.2, 1)', // Prada-like smooth transitions
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      boxShadow: {
        'luxury': '0 20px 40px rgba(0,0,0,0.08)',
        'floating': '0 10px 30px rgba(0,0,0,0.12)',
        'minimal': '0 2px 8px rgba(0,0,0,0.04)',
        'depth': '0 25px 50px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #1A1A1A 0%, #2C2C2C 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #1B4F3C 0%, #0F2F22 100%)',
      },
      animation: {
        'fade-in-luxury': 'fadeInLuxury 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'slide-up-luxury': 'slideUpLuxury 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
      keyframes: {
        fadeInLuxury: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpLuxury: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} 