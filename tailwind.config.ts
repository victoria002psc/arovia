import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        arovia: {
          care: "#10B981",
          medicine: "#EF4444",
          equipment: "#3B82F6",
          digital: "#8B5CF6",
          cyan: "#06B6D4",
          ink: "#0F172A",
          muted: "#475569",
          mist: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-care": "linear-gradient(135deg, #10B981 0%, #14B8A6 100%)",
        "gradient-medicine": "linear-gradient(135deg, #F87171 0%, #F43F5E 100%)",
        "gradient-equipment": "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
        "gradient-digital": "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
        "gradient-subtle": "linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)",
      },
      boxShadow: {
        card: "0 10px 30px -18px rgba(15, 23, 42, 0.35)",
        lift: "0 18px 40px -20px rgba(15, 23, 42, 0.4)",
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
