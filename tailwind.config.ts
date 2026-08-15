import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lemon: {
          400: '#ffdd00'
        },
        cinnamon: {
          400: '#eea78c'
        },
        paleblue: {
          400: '#a7d4e4'
        }
      },
      aspectRatio: {
        'meishi': '1.65'
      }
    },
  },
  plugins: [],
};
export default config;
