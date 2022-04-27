const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./public/**/*.html",
      "./public/*.html",
      "./src/**/*.js",
      "./src/*.js",
      "./src/**/*.html",
      "./src/*.html",
      "./public/**/*.js",
      "./public/*.js",
    ],
    options: {
      safelist: [],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities, addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents(
        [
          {
            [`@media (max-width: ${screens["max-lg"]["max"]})`]: {
              ".static-important": {
                position: "static !important",
              },
            },
          },
          {
            [`@media (max-width: ${screens["max-lg"]["max"]})`]: {
              ".transform-none-important": {
                transform: "none !important",
              },
            },
          },
        ],
        {
          respectPrefix: false,
        }
      );
    }),
  ],
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      current: "current",
      facebook: {
        regular: "#3b5999",
        active: "#344e87",
      },
      twitter: {
        regular: "#1da1f2",
        active: "#0d95e8",
      },
      instagram: {
        regular: "#e4405f",
        active: "#e02549",
      },
      github: {
        regular: "#222",
        active: "#131313",
      },
      pinterest: {
        regular: "#bd081c",
        active: "#a00718",
      },
      youtube: {
        regular: "#cd201f",
        active: "#b21c1b",
      },
      vimeo: {
        regular: "#1ab7ea",
        active: "#13a3d2",
      },
      slack: {
        regular: "#3aaf85",
        active: "#329874",
      },
      dribbble: {
        regular: "#ea4c89",
        active: "#e73177",
      },
      reddit: {
        regular: "#ff4500",
        active: "#e03d00",
      },
      tumblr: {
        regular: "#35465c",
        active: "#2a3749",
      },
      linkedin: {
        regular: "#0077b5",
        active: "#00669c",
      },
    },
    extend: {
      screens: {
        "max-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }

        "max-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "max-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
      },
      borderRadius: {
        inherit: "inherit",
      },
      lineHeight: {
        "extra-relaxed": "1.7",
      },
      minHeight: {
        6: "1.5rem",
        "screen-60": "60vh",
        "screen-75": "75vh",
        "330-px": "330px",
        "400-px": "400px",
        "480-px": "480px",
        "500-px": "500px",
        "700-px": "700px",
      },
      translate: {
        "-1/5": "-20%",
        "1/5": "20%",
      },
      letterSpacing: {
        875: "0.875rem",
      },
      fontSize: {
        10: "10rem",
        12: "12rem",
        55: "55rem",
        1625: "1.625rem",
      },
      opacity: {
        4: "0.04",
        15: "0.15",
        65: ".65",
        85: ".85",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        9998: 9998,
        9999: 9999,
      },
      inset: {
        "-94-px": "-94px",
        "-64-px": "-64px",
        "-24-px": "-24px",
        "280-px": "280px",
        "320-px": "320px",
        "-1/25": "-4%",
        0: "0",
        "1/100": "1%",
        "1/50": "2%",
        "1/25": "4%",
        "1/20": "5%",
        "7/100": "7%",
        "1/10": "10%",
        "7/20": "35%",
        "9/25": "36%",
        "19/50": "38%",
        "11/25": "44%",
      },
      height: {
        "screen-50": "50vh",
        "70-px": "70px",
        "95-px": "95px",
        "140-px": "140px",
        "300-px": "300px",
        "330-px": "330px",
        "350-px": "350px",
        "400-px": "400px",
        "430-px": "430px",
        "500-px": "500px",
        "530-px": "530px",
        "550-px": "550px",
        "600-px": "600px",
        "auto-important": "auto !important",
        "full-500": "500%",
      },
      maxHeight: {
        "440-px": "440px",
        "700-px": "700px",
        "999-px": "999px",
        "screen-70": "70vh",
      },
      width: {
        double: "200%",
        "100-px": "100px",
        "170-px": "170px",
        "450-px": "450px",
        "650-px": "650px",
        "768-px": "768px",
        "850-px": "850px",
        "full-500": "500%",
      },
      maxWidth: {
        "40-px": "40px",
        "64-px": "64px",
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "250-px": "250px",
        "360-px": "360px",
      },
      minWidth: {
        "140-px": "140px",
        48: "12rem",
      },
      backgroundSize: {
        full: "100%",
        "20-full-auto": "20% auto",
      },
      backgroundPosition: {
        "50-center": "50% center",
        "50-top": "50% top",
        50: "50%",
        "center-top": "center top",
        100: "100%",
      },
      spacing: {
        "50-px": "50px",
        "-220-px": "-220px",
      },
      animation: {
        "index-image": "indexImage 20s linear infinite",
      },
      keyframes: {
        indexImage: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "group-focus",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
    "checked",
  ],
};
