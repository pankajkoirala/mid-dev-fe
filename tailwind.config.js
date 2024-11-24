/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        primary: "#1E90FF",
        secondary: "#F5F5F5",
        "text-body": "#666666",
        "text-dark": "#333333",
        accent: "#FF6347",
        "accent-light":"#fa725a"
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};
