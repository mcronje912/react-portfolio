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
      backgroundImage: {
        "gradient-light": "linear-gradient(to bottom right, lightblue, grey)",
        "gradient-dark": "linear-gradient(to bottom right, darkblue, grey)",
        "pattern-light": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2339AED3' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "pattern-dark": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2339AED3' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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
            success: {
              50: "#F3FCCD",
              100: "#E5F99D",
              200: "#CDEE6A",
              300: "#B2DE44",
              400: "#8EC910",
              500: "#74AC0B",
              600: "#5C9008",
              700: "#467405",
              800: "#366003",
              900: "#366003",
              DEFAULT: "#74AC0B",
            },
            info: {
              50: "#D3EDFF",
              100: "#A6D8FF",
              200: "#7ABFFF",
              300: "#59A8FF",
              400: "#2382FF",
              500: "#1964DB",
              600: "#114AB7",
              700: "#0B3493",
              800: "#06247A",
              900: "#06247A",
              DEFAULT: "#1964DB",
            },
            warning: {
              50: "#FFF9CC",
              100: "#FFF299",
              200: "#FFE866",
              300: "#FFDF3F",
              400: "#FFD000",
              500: "#DBAE00",
              600: "#B78E00",
              700: "#937000",
              800: "#7A5A00",
              900: "#7A5A00",
              DEFAULT: "#DBAE00",
            },
            danger: {
              50: "#FFEBDC",
              100: "#FFD2BA",
              200: "#FFB398",
              300: "#FF957E",
              400: "#FF6554",
              500: "#DB403D",
              600: "#B72A33",
              700: "#931A2C",
              800: "#7A1027",
              900: "#7A1027",
              DEFAULT: "#DB403D",
            },
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
            success: {
              50: "#366003",
              100: "#467405",
              200: "#5C9008",
              300: "#74AC0B",
              400: "#8EC910",
              500: "#B2DE44",
              600: "#CDEE6A",
              700: "#E5F99D",
              800: "#F3FCCD",
              900: "#F3FCCD",
              DEFAULT: "#74AC0B",
            },
            info: {
              50: "#06247A",
              100: "#0B3493",
              200: "#114AB7",
              300: "#1964DB",
              400: "#2382FF",
              500: "#59A8FF",
              600: "#7ABFFF",
              700: "#A6D8FF",
              800: "#D3EDFF",
              900: "#D3EDFF",
              DEFAULT: "#1964DB",
            },
            warning: {
              50: "#7A5A00",
              100: "#937000",
              200: "#B78E00",
              300: "#DBAE00",
              400: "#FFD000",
              500: "#FFDF3F",
              600: "#FFE866",
              700: "#FFF299",
              800: "#FFF9CC",
              900: "#FFF9CC",
              DEFAULT: "#DBAE00",
            },
            danger: {
              50: "#7A1027",
              100: "#931A2C",
              200: "#B72A33",
              300: "#DB403D",
              400: "#FF6554",
              500: "#FF957E",
              600: "#FFB398",
              700: "#FFD2BA",
              800: "#FFEBDC",
              900: "#FFEBDC",
              DEFAULT: "#DB403D",
            },
          },
        },
      },
    }),
  ],
};
