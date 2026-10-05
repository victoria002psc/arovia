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
          care: "#10B981",
          medicine: "#EF4444",
          equipment: "#3B82F6",
          digital: "#8B5CF6",
          cyan: "#06B6D4",
          navy: "#0B172A",
          ink: "#0F172A",
          muted: "#475569",
          mist: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-care": "linear-gradient(135deg, #10B981 0%, #14B8A6 100%)",
        "gradient-medicine": "linear-gradient(135deg, #EF4444 0%, #F43F5E 100%)",
        "gradient-equipment": "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
        "gradient-digital": "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
        "gradient-subtle": "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
        md: "0 8px 24px -12px rgba(15, 23, 42, 0.18)",
        lg: "0 18px 40px -20px rgba(15, 23, 42, 0.28)",
        glow: "0 0 0 1px rgba(6, 182, 212, 0.25), 0 12px 32px -16px rgba(6, 182, 212, 0.45)",
        card: "0 10px 30px -18px rgba(15, 23, 42, 0.35)",
        lift: "0 18px 40px -20px rgba(15, 23, 42, 0.4)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
      },
      maxWidth: {
        content: "72rem",
        wide: "90rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
