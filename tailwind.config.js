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
          primary: "#000000",
          surface0: "#050505",
          surface1: "#0A0A0A",
          surface2: "#121212",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA", // Zinc-400
          muted: "#71717A",    // Zinc-500
        },
        accent: {
          blue: "#2997FF",
          hover: "#007AFF",
          dim: "rgba(41, 151, 255, 0.15)",
        },
        status: {
          success: "#30D158",
          warning: "#FFD60A",
          error: "#FF453A",
        },
        glass: {
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
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
