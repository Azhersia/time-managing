import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {

      'olive': '#cfe2cd',
      'oliveShade': '#acbea9',
      'oliveText': '#536150',
      'oliveTextHover': '#444e42',
      'graywhite': '#e2eddf',
      'inputShade': '#c0cfbc',


    },
  },
  plugins: [],
};
export default config;
