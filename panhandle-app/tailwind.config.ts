import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      colors: {
        surface: {
          DEFAULT: 'hsl(222 47% 11%)',
          elevated: 'hsl(222 47% 14%)',
          muted: 'hsl(222 20% 18%)',
        },
        accent: {
          DEFAULT: 'hsl(43 96% 36%)',
          muted: 'hsl(43 40% 28%)',
        },
      },
    },
  },
  plugins: [],
};

export default config;
