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
    extend: {
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
