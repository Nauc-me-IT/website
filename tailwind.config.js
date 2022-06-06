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
    backgroundSize: {
      "100/100": "100% 100%",
      "100/0": "100% 0%",
    },
    backgroundImage: {
      animable: "linear-gradient(rgb(var(--color-primary)) 0 0)",
    },
    appearance: {
      button: "button",
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
      maxWidth: {
        xxs: "14rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
