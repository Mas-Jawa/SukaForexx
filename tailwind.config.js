/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forex: {
          primary: '#1a1a2e',
          secondary: '#16213e',
          accent: '#0f3460',
          gold: '#ffd700',
          green: '#00ff88',
          red: '#ff4757'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}