// import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

import flowbite from "flowbite-react/tailwind";
export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        icloud: "url('/bg.jpg')",
      },
    },
  },
  plugins: [flowbite.plugin()],
});

// export  config;
