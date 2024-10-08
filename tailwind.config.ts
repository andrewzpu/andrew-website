import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'red': '#ff0000',
      'green': '#00ff00',
      'blue': '#0000ff',
      'black': '#000000',
      'grey': "#5F6368",
      'grey_1': "#f0f0f0",
      'grey_2': "#e0e0e0",
      'navy': "#182b49",
    },
  },
  plugins: [],
  variants: {
    opacity: ['hover']
  }
};
export default config;
