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
      backgroundImage: {
        "gradient-light": "linear-gradient(to bottom right, #FFFFFF, #DBFEF9)",
        "gradient-dark": "linear-gradient(to bottom right, #0F4576, #19608E)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "2px",
          medium: "4px",
          large: "6px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            navbar: "#FFFFFF",
            primary: {
              50: "#DBFEF9",
              100: "#B9FEF9",
              200: "#95FBFC",
              300: "#7AEEF9",
              400: "#4FDBF6",
              500: "#39AED3",
              600: "#2785B1",
              700: "#19608E",
              800: "#0F4576",
              900: "#0F4576",
              DEFAULT: "#39AED3",
              foreground: "#FFFFFF",
            },
            // ... (rest of the light mode colors remain the same)
          },
        },
        dark: {
          colors: {
            background: "#0F4576",
            foreground: "#ECEDEE",
            navbar: "#19608E",
            primary: {
              50: "#0F4576",
              100: "#19608E",
              200: "#2785B1",
              300: "#39AED3",
              400: "#4FDBF6",
              500: "#7AEEF9",
              600: "#95FBFC",
              700: "#B9FEF9",
              800: "#DBFEF9",
              900: "#DBFEF9",
              DEFAULT: "#39AED3",
              foreground: "#11181C",
            },
            // ... (rest of the dark mode colors remain the same)
          },
        },
      },
    }),
  ],
};
