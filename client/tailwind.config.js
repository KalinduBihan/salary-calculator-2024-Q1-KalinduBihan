/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#FAFAFA",
        "custom-gray": "#E0E0E0",
        "custom-gray-text": "#757575",
        reset: "#0052EA",
      },
      fontSize: {
        topic: "20px",
        subtopic: "16px",
        subtext: "12px",
        addBtn: "14px",
      },
      width: {
        customWidth: "360px",
        btn: "38px",
      },
      height: {
        btn: "38px",
      },
    },
  },
  plugins: [],
};
