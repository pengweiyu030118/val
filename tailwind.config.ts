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
        valorant: {
          red: "#ff4655",
          "red-dark": "#c0392b",
          "red-light": "#ff6b7a",
          dark: "#0a0a0a",
          "dark-secondary": "#111111",
          "dark-tertiary": "#1a1a1a",
          gray: "#8b8b8b",
          "gray-light": "#b0b0b0",
          cyan: "#00e5ff",
          "cyan-dark": "#00b8d4",
          gold: "#ffd700",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 70, 85, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 70, 85, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.9)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "valorant-gradient": "linear-gradient(135deg, #ff4655 0%, #ff6b7a 50%, #c0392b 100%)",
        "dark-gradient": "linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #1a1a1a 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
