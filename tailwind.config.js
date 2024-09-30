const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      colors: {
        'delft-blue': '#1d2f6f',
        'magnolia': '#fcf7ff',
        'turquoise': '#55d6be',
        'bright-pink': '#fc6471',
        'mountbatten-pink': '#81717a',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to bottom right, #fcf7ff, #bcf5ea)',
        'gradient-dark': 'linear-gradient(to bottom right, #1d2f6f, #81717a)',
        'pattern-light': "url('/images/background-pattern2.svg')",
        'pattern-dark': "url('/images/background-pattern.svg')",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#fcf7ff",
            foreground: "#1d2f6f",
            primary: {
              50: "#fcf7ff",
              100: "#e7e0f9",
              200: "#d2c8f3",
              300: "#bdb0ed",
              400: "#a898e7",
              500: "#9380e1",
              600: "#7e68db",
              700: "#6950d5",
              800: "#5438cf",
              900: "#4020c9",
              DEFAULT: "#55d6be",
              foreground: "#1d2f6f",
            },
            // Add other color definitions as needed
          },
        },
        dark: {
          colors: {
            background: "#1d2f6f",
            foreground: "#fcf7ff",
            primary: {
              50: "#4020c9",
              100: "#5438cf",
              200: "#6950d5",
              300: "#7e68db",
              400: "#9380e1",
              500: "#a898e7",
              600: "#bdb0ed",
              700: "#d2c8f3",
              800: "#e7e0f9",
              900: "#fcf7ff",
              DEFAULT: "#55d6be",
              foreground: "#1d2f6f",
            },
            // Add other color definitions as needed
          },
        },
      },
    }),
  ],
};