/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleorange: "hsl(25, 100%, 94%)",
      neutraldarkblue: "hsl(220, 13%, 13%)",
      neutraldarkgrayishblue: "hsl(219, 9%, 45%)",
      neutralgrayishblue: "hsl(220, 14%, 75%)",
      neutrallightgrayishblue: "hsl(223, 64%, 98%)",
      neutralwhite: "hsl(0, 0%, 100%)",
      neutralblack: "hsl(0, 0%, 0%)",
      debug: "rgb(0, 255, 0)",
    },
    screens: {
      desktop: "1440px",
    },
    container: {
      center: true,
      lg: "1024px",
    },
  },
  plugins: [],
};

// - Orange: hsl(26, 100%, 55%)
// - Pale orange: hsl(25, 100%, 94%)

// ### Neutral

// - Very dark blue: hsl(220, 13%, 13%)
// - Dark grayish blue: hsl(219, 9%, 45%)
// - Grayish blue: hsl(220, 14%, 75%)
// - Light grayish blue: hsl(223, 64%, 98%)
// - White: hsl(0, 0%, 100%)
// - Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)
