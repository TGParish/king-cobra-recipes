/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        creepster: ["Creepster", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              marginBottom: "0",
              textTransform: "capitalize",
            },

            h2: {
              textTransform: "capitalize",
              fontSize: "2rem",
              textAlign: "center",
              marginTop: "1rem",
              marginBottom: ".5rem",
            },
            h3: {
              textTransform: "capitalize",
              marginTop: "1rem",
              marginBottom: ".5rem",
              fontSize: "1.8rem",
              textAlign: "center",
            },
            p: {
              fontSize: "1.8rem",
            },

            a: {},
            blockQuote: {
              borderLeft: "4px solid",
              borderLeftColor: theme("colors.lake-placid-blue"),
              "& p:first-of-type::before": {
                content: "none",
              },
              a: {
                textAlign: "center",
                textDecoration: "none",
                color: "black",
                fontColor: theme("colors.gray.500"),
                "&:hover": {
                  borderBottom: "2px",
                  borderBottomStyle: "solid",
                  textDecoration: "none",
                  borderBottomColor: theme("colors.black.400"),
                  color: "black",
                },
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
