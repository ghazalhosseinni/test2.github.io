/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  mode: "jit", // update this line
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  options: {
    safelist: ["aos-init", "aos-animate", "fade-up"], // Add your animation classes here
  },
  theme: {
    extend: {
      colors: {
        primary: "#004FFE",
        secondary: "#009C9A",
        blueLight: "#0dcaf0",
        blueDark: "#032873",
        lightGray: "#D3D3D3",
        bgColor: "#e6f0fe",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      boxShadow: {
        main: " 0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
      },
    },
  },
  plugins: [],
  safelist: [],
};
