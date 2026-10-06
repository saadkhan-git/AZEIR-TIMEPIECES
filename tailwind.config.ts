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
        ivory: "#F4EBD0",
        ink: "#050505",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C96A",
          dark: "#A68620",
        },
        stone: "#0A0A0A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.42em",
      },
      transitionDuration: {
        600: "600ms",
      },
    },
  },
  plugins: [],
};
export default config;
