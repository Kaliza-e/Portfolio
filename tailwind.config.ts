import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
        "cyber-neon": "#00ffcc",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      perspective: {
        "1000": "1000px",
      },
    },
  },
  plugins: [],
};
export default config;