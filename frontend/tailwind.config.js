/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-cta": "#6B38FB",
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#E0D4FF",
        "font-primary": "#120e17",
        "font-secondary": "#524e57",
      },
    },
  },
  plugins: [],
};
