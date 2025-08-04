import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: "#1A6DFF",
        night: "#0A0A0A"
      },
      container: {
        center: true,
        padding: "1rem"
      }
    },
  },
  plugins: [],
};
export default config;
