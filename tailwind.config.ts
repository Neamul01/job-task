import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      width: {
        layout: "95rem",
      },
      maxWidth: {
        layout: "95rem",
        registration: "800px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
      fontSize: {
        h1: "42px",
        h2: "36px",
        h3: "32px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
