import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:          'var(--color-primary)',
        'primary-dark':   'var(--color-primary-dark)',
        accent:           'var(--color-accent)',
        'accent-light':   'var(--color-accent-light)',
        surface:          'var(--color-surface)',
        'surface-dark':   'var(--color-surface-dark)',
      },
      fontFamily: {
        sora:  ['var(--font-sora)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
