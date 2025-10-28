/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "4rem",
        // padding block
        paddingBlock: "4rem",
        
      },
      colors: {
        mColor: "#00004E",
        secColor: "#00BF00",
        blueColor: "#0064FF",
        grayColor: "#FEFEFF",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
