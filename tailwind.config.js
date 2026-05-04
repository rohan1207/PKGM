/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#F9F7F2",
        ink: "#2D1E17",
        coral: "#F06529",
        sun: "#FFC107",
        leaf: "#4CAF50",
        sky: "#42A5F5",
      },
      borderRadius: {
        squirl: "1.75rem",
        blob: "3rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "grain-shift": "grainShift 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        grainShift: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
      boxShadow: {
        lift: "0 24px 60px -20px rgba(45, 30, 23, 0.18)",
        card: "0 12px 40px -16px rgba(45, 30, 23, 0.12)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
