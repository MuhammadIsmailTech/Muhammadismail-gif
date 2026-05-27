/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        surfaceSoft: "var(--surface-soft)",
        accent: "var(--accent)",
        accentStrong: "var(--accent-strong)",
        border: "var(--border)",
        gray: {
          50: "#f8fbff",
          100: "#e6f0ff",
          200: "#c8daf6",
          300: "#9fb7e1",
          400: "#7895c4",
          500: "#5b78a4",
          600: "#415b7d",
          700: "#2a3e57",
          800: "#17283b",
          850: "#101f33",
          900: "#081223",
        },
        cyan: {
          400: "#7dd3fc",
          500: "#38bdf8",
          600: "#0ea5e9",
        },
        blue: {
          500: "#5b8bff",
          600: "#4f6ce5",
        },
        purple: {
          500: "#c084fc",
          600: "#a855f7",
        },
        orange: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(56, 189, 248, 0.22)",
      },
    },
  },
  plugins: [],
};
