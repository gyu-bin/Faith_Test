import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        cream2: "var(--cream2)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "gold-pale": "var(--gold-pale)",
        brown: "var(--brown)",
        "brown-light": "var(--brown-light)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-mute": "var(--ink-mute)",
      },
      borderRadius: {
        card: "24px",
        inner: "10px",
      },
      maxWidth: {
        app: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
