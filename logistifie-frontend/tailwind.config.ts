import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/hero.png')",
        app: "url('../public/download.png')",

        "custom-gradient":
          "linear-gradient(228.4deg, rgba(8, 16, 23, 0.27) 0%, rgba(8, 16, 23, 0.666) 42.38%, rgba(8, 16, 23, 0.738) 52.51%, rgba(8, 16, 23, 0.781483) 75.5%, rgba(8, 16, 23, 0) 112.04%)"
      },
      boxShadow: {
        "custom-shadow": "0 4px 6px rgba(34, 53, 68, 0.48)"
      },

      colors: {
        "lf-25": "#B2B2B2",
        "lf-50": "#FDC65C",
        "lf-100": "#F97040",
        "lf-200": "#223544",
        "lf-300": "#E1E1E126",
        "lf-400": "#11202D",
        "lf-500": "#1E222C",
        "lg-600": "#081017"
      }
    }
  },
  plugins: []
};
export default config;
