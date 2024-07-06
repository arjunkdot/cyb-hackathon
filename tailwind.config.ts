import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: '#fbf9f2'
      },
      container: {
        center: true,
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        corporate: {
          ...require("daisyui/src/theming/themes")["corporate"],
          primary: "#ec7212",
          secondary: "#433967",
          accent: "#ec7212",
          neutral: "#fbf9f2",
          info: "#7783ff",
          success: "#00b78a",
          warning: "#ff9d42",
          error: "#e74d5a",
          "--rounded-btn": "0",
          "--rounded-box": "0"
        },
      },
    ],
  },
};
export default config;
