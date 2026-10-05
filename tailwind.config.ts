import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        arovia: {
          navy: "#0B172A",
          charcoal: "#1F2937",
          off: "#F7F8F6",
          mist: "#F7F8F6",
          soft: "#EEF1F3",
          ink: "#1F2937",
          muted: "#4B5563",
          teal: "#0F9F8F",
          cyan: "#0E4F45",
          care: "#1F7A6B",
          "care-tint": "#E7F3F0",
          "care-dark": "#0E4F45",
          medicine: "#7A3040",
          pharmacy: "#7A3040",
          "pharmacy-tint": "#F6EBEE",
          "pharmacy-dark": "#4C1D28",
          equipment: "#1E4E8C",
          "equipment-tint": "#E8EEF6",
          "equipment-dark": "#163A68",
          digital: "#5B4B8A",
          "digital-tint": "#F0EDF6",
          "digital-dark": "#3D3260",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        xs: "0 1px 2px rgba(11, 23, 42, 0.04)",
        sm: "0 1px 2px rgba(11, 23, 42, 0.06)",
        md: "0 8px 24px -16px rgba(11, 23, 42, 0.16)",
      },
      borderRadius: {
        sm: "2px",
        md: "6px",
        lg: "10px",
      },
      maxWidth: {
        content: "72rem",
        wide: "80rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
