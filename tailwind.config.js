/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "#444955",
          "200": "#29313d",
          "300": "#023031",
          "400": "#052727",
        },
        white: "#fff",
        teal: "#036b52",
        "gray-700": "#3d495c",
        "gray-100": "#f0f2f5",
        "gray-300": "#e1e5eb",
        mediumseagreen: "#2fc18c",
        "gray-500": "#c5c9ce",
        firebrick: "#b01726",
      },
      spacing: {},
      fontFamily: {
        epilogue: "Epilogue",
        "text-sm-regular": "Verdana",
      },
      borderRadius: {
        "3xs-7": "9.7px",
        "3xs": "10px",
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "base-6": "15.6px",
      "3xs-7": "9.7px",
      "8xl-3": "27.3px",
      "3xl": "22px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      "9xl": "28px",
      xs: "12px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
