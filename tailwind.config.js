/** @type {import('tailwindcss').Config} */
export const theme = {
  extend: {
      boxShadow: {
          custoum: "10px 10px 0px -1px rgba(0,0,0,1)",
      },
  },
};
export const plugins = [require("@tailwindcss/aspect-ratio")];
