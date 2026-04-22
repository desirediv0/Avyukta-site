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
        maroon: {
          DEFAULT: "#6E0F1F",
          dark: "#4A0A14",
          light: "#8B1528",
          50: "#FDF2F4",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CC6A",
          dark: "#B8960F",
          muted: "#C9A227",
        },
        ivory: {
          DEFAULT: "#F8F5F0",
          dark: "#EDE8E0",
          50: "#FDFCFA",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#333333",
          muted: "#555555",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "fade-up": "fadeUp 1s ease-out forwards",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(212,175,55,0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
