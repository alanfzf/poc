/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react"

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#83B916",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#f4f6f9",
              foreground: "#000000",
            },
            focus: "#83B916",
          },
        },
      },
    }),
  ],
}

export default config
