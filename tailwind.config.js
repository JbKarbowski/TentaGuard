/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          background: "#0D1117",
          surface: "#161B22",
          accent: "#00FF9C",
          accentLight: "#58E6C2",
          textPrimary: "#E6EDF3"
        }
      }
    },
  },
  plugins: [],
}
