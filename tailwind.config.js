function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

// eslint-disable-next-line functional/immutable-data
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      primary: withOpacityValue("--color-primary"),
      secondary: withOpacityValue("--color-secondary"),
      off: withOpacityValue("--color-off"),
      background: withOpacityValue("--color-background"),
      highlight: withOpacityValue("--color-highlight"),
      form: withOpacityValue("--color-form"),
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      base: "1.125rem",
      lg: "1.25rem",
      xl: "1.875rem",
      "2xl": "2.813rem",
      "3xl": "3.5rem",
      "4xl": "4.375rem",
    },
    letterSpacing: {
      normal: "0",
      wider: "0.019rem",
      huge: "0.281rem",
    },
    extend: {
      appearance: {
        button: "button",
      },
      backgroundColor: {
        transparent: "transparent",
      },
      backgroundSize: {
        "100/100": "100% 100%",
        "100/0": "100% 0%",
      },
      backgroundImage: {
        animable: "linear-gradient(rgb(var(--color-primary)) 0 0)",
        alt: "linear-gradient(90deg, rgb(17, 25, 58) 0%, rgb(54, 69, 122) 100%), linear-gradient(270deg, rgba(109,157,255,0.4) 0%, rgba(141,130,255,0.4) 54%, rgba(47,58,145,0.4) 87.9%, rgba(21,45,86,0.4) 100%)",
      },
      maxWidth: {
        xxs: "14rem",
        xsProse: "41ch",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        pulseDown: {
          "0%, 10%, 100%": { transform: "translateY(0)" },
          "5%": { transform: "translateY(11px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        pulseDown: "pulseDown 30s ease-in-out infinite",
      },
      transitionProperty: {
        backgroundSize: "background-size",
      },
      listStyleType: {
        dash: '"- "',
      },
    },
  },
  plugins: [],
}
