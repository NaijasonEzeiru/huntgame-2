/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--primary-bg-color)",
        secondaryBg: "var(--secondary-bg-color)",
        secondaryColor: "hsl(var(--secondary-color))",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
