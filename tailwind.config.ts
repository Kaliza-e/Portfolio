import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neonPurple: "var(--neon-purple)",
        neonBlue: "var(--neon-blue)",
        neonCyan: "var(--neon-cyan)",
      },
    },
  },
  plugins: [],
};

export default config;
