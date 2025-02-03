import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        dark: {
          default: "var(--dark-default)",
          dark: "var(--dark-dark)",
        },
        text: {
          default: "var(--text-default)",
          info: "var(--text-info)",
          active: "var(--text-active)",
          muted: "var(--text-muted)",
        }
      },
      transitionDuration: {
        350: "350ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
