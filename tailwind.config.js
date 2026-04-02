/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#030712", // slate-950
          surface0: "#020617", // slate-950 darker
          surface1: "#0f172a", // slate-900
          surface2: "#1e293b", // slate-800
        },
        text: {
          primary: "#f8fafc", // slate-50
          secondary: "#94a3b8", // slate-400
          muted: "#64748b",    // slate-500
        },
        accent: {
          blue: "#38bdf8", // light blue
          hover: "#0284c7", // sky 600
          dim: "rgba(56, 189, 248, 0.15)",
        },
        status: {
          success: "#22c55e",
          warning: "#eab308",
          error: "#ef4444",
        },
        glass: {
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      }
    },
  },
  plugins: [],
};
