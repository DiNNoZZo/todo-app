import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#51759D',
          dark: '#E6ECF2',
        },
        background: {
          light: '#E6ECF2',
          dark: '#51759D',
        },
        text: {
          light: '#51759D',
          dark: '#E6ECF2',
        },
      },
    },
  },
  plugins: [],
};
export default config;
