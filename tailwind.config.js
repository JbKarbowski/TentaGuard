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
          50: "#eef6ff",
          100: "#dbebff",
          200: "#bad7ff",
          300: "#91beff",
          400: "#5a98ff",
          500: "#357bff",
          600: "#1f62f0",
          700: "#194fbe",
          800: "#173f95",
          900: "#142f6d",
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
