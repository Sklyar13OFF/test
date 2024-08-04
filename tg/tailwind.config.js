/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/swap/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/spot/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        smd: "576px",
        md: "768px",
        mdlg: "1200px",
        lg: "1440px",
        xl: "1920px",
      },
      colors: {
        bkg: "hsl(var(--color-bkg) / 1.0)",
        "log-bkg": "hsl(var(--color-log-bkg) / 1.0)",
        bl: "hsl(var(--color-bl) / 1.0)",
        "light-gr": "hsl(var(--color-light-gr)/1.0)",
        "light-border": "hsl(var(--color-light-border)/1.0)",
        "root-green": "hsl(var(--color-root-green)/1.0)",
        gr: "hsl(var(--color-root-gr)/1.0)",
        "lighty-gr": "hsl(var(--color-root-gr)/0.08)",

        "root-yellow": "hsl(var(--color-root-yellow)/1.0)",
        "root-yellow-8": "hsl(var(--color-root-yellow)/0.08)",

        "root-red": "hsl(var(--color-root-red)/1.0)",
        "finrex-lime": "#2CC8AE",
        "finrex-black": "#121212",
        "finrex-gray": "#667085",
        darker: "#171717",
        graphite: "hsl(var(--color-graphite) / 1.0)",
        "finrex-green-light": "rgba(35,162,93,0.2)",
        "border-grey": "#EAECF0",
        "root-green-8": "hsl(var(--color-root-green) / 0.08)",
        "root-red-8": "hsl(var(--color-root-red) / 0.08)",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      opacity: {
        8: "0.08",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // This disables DaisyUI themes
  },
};
