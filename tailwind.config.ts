import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F9BF4",
        background: "#0C0811",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
