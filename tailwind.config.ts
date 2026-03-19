import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          950: "#0D0414",
          900: "#1A0826",
          800: "#2E0F3A",
          700: "#3D1450",
          600: "#4F1A68",
          500: "#6B2490",
        },
        gold: {
          300: "#F0D080",
          400: "#E8C055",
          500: "#D4AF37",
          600: "#B8961E",
          700: "#9A7D10",
        },
        cream: "#FAF7F0",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'EB Garamond'", "Georgia", "serif"],
        accent: ["'Cinzel'", "Georgia", "serif"],
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(212,175,55,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
