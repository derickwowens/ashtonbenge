import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warmth: {
          50: "#fdf8f0",
          100: "#faebd7",
          200: "#f5d6ae",
          300: "#efc085",
          400: "#e8a95c",
          500: "#e19233",
          600: "#c77a24",
          700: "#a5621e",
          800: "#844e1e",
          900: "#6c411c",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        handwriting: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
