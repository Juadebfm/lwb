import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lwb_orange: "#FF6636",
        lwb_blue: "#2237b3",
        lwb_light_blue: "#368dcc",
        lwb_sky_blue: "#c1d5ed",
        lwb_gray: "#323231",
        lwb_black: "#1D2026",
      },
      fontFamily: {
        lwb_font: ['"Inter"', "sans-serif"],
      },
      backgroundImage: {
        lwb_hero_gradient: "linear-gradient(90deg, #F0F2F500, #F0F2F5)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    [addVariablesForColors],
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
