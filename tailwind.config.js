/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary
        'primary-50': '#eef2ff',
        'primary-100': '#e0e7ff',
        'primary-200': '#c7d2fe',
        'primary-300': '#a5b4fc',
        'primary-400': '#818cf8',
        'primary-500': '#6366f1',
        'primary-600': '#4f46e5',
        'primary-700': '#4338ca',
        'primary-800': '#3730a3',
        'primary-900': '#312e81',
        'primary-950': '#1e1b4b',
        
        // Secondary (purple)
        'secondary-50': '#f5f3ff',
        'secondary-100': '#ede9fe',
        'secondary-200': '#ddd6fe',
        'secondary-300': '#c4b5fd',
        'secondary-400': '#a78bfa',
        'secondary-500': '#8b5cf6',
        'secondary-600': '#7c3aed',
        'secondary-700': '#6d28d9',
        'secondary-800': '#5b21b6',
        'secondary-900': '#4c1d95',
        'secondary-950': '#2e1065',
        
        // Accent (emerald)
        'accent-50': '#ecfdf5',
        'accent-100': '#d1fae5',
        'accent-200': '#a7f3d0',
        'accent-300': '#6ee7b7',
        'accent-400': '#34d399',
        'accent-500': '#10b981',
        'accent-600': '#059669',
        'accent-700': '#047857',
        'accent-800': '#065f46',
        'accent-900': '#064e3b',
        'accent-950': '#022c22',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        fadeInRight: 'fadeInRight 0.5s ease-out',
        fadeInLeft: 'fadeInLeft 0.5s ease-out',
        scaleIn: 'scaleIn 0.5s ease-out',
      },
      
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
            h4: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  plugins: [],
};