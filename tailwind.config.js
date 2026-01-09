module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#4f46e5'
        },
        accent: {
          DEFAULT: '#06b6d4'
        },
        surface: {
          light: '#f8fafc',
          dark: '#0b1220'
        }
      },
      fontFamily: {
        sans: ["\"Inclusive Sans\"", "Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        card: '0 6px 18px rgba(13, 16, 23, 0.08)',
        cardDark: '0 10px 30px rgba(2,6,23,0.6)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 400ms ease-out both'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};