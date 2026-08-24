/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink': 'var(--color-ink)',
        'ink-hover': 'var(--color-ink-hover)',
        'background': 'var(--color-background)',
        'surface': 'var(--color-surface)',
        'surface-soft': 'var(--color-surface-soft)',
        'border': 'var(--color-border)',
        'muted': 'var(--color-muted)',
        'accent': 'var(--color-accent)',
        'primary': 'var(--color-primary)',
        'dark-text': 'var(--color-dark-text)',
        'dark-muted': 'var(--color-dark-muted)',
      },
      fontFamily: {
        sans: ['"Clash Display"', 'sans-serif'],
        display: ['"Clash Display"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
