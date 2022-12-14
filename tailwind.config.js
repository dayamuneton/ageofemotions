/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            orange: "#ff6161",
            yellow: "#e4f10c",
            lightBlue: "#77e2f0",
            blueGray: {
               DEFAULT: "#bdc8d8",
               dark: "#8e9db2",
            },
            rose: "#f2e2f6",
         },
      },
   },
   plugins: [],
};
