type Props = {
  readonly theme: "main" | "off"
  readonly children: string
  readonly disabled?: boolean
  readonly classNames?: string
}
// eslint-disable-next-line functional/no-return-void
type NormalButtonProps = Props & { readonly onClick: () => void }
type LinkButtonProps = Props & { readonly to: string }
type ButtonProps = LinkButtonProps | NormalButtonProps
type SocialButtonProps = Omit<NormalButtonProps, "theme"> | Omit<LinkButtonProps, "theme">

const mainClasses =
  "text-highlight border-none py-2 px-5 polygon-path focus-visible:outline-none before:bg-primary focus:before:bg-secondary text-center appearance-button"
const themeClasses = {
  main: "bg-primary",
  off: "bg-scroll bg-animable bg-clip-border bg-origin-padding bg-transparent bg-100/0 bg-bottom bg-no-repeat transition-all duration-500 ease hover:bg-100/100",
}
const polygonBorderVars = {
  "--path": "20% 0%, 90% 0%, 100% 20%, 100% 50%, 80% 100%, 20% 100%, 10% 100%, 0% 70%, 0% 40%",
  "--border": "2px",
} as React.CSSProperties
const hexagonBorderVars = {
  "--path": "20% 0%, 90% 0%, 100% 20%, 100% 50%, 80% 100%, 20% 100%, 10% 100%, 0% 70%, 0% 40%",
  "--border": "2px",
} as React.CSSProperties

export function Button({ classNames, disabled, children, theme, ...rest }: ButtonProps) {
  const El = /* "to" in rest ? Link : */ "button"

  return (
    <El
      className={`${mainClasses} ${themeClasses[theme]} ${
        disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer hover:animate-wiggle"
      }${classNames ?? ""}`}
      style={polygonBorderVars}
      disabled={disabled}
      {...rest}
    >
      {children}
    </El>
  )
}

export function SocialButton({ classNames, disabled, children, ...rest }: SocialButtonProps) {
  const El = /* "to" in rest ? Link : */ "button"

  return (
    <El
      className={`${mainClasses} ${themeClasses.off} ${
        disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer hover:animate-wiggle"
      }${classNames ?? ""}`}
      style={hexagonBorderVars}
      disabled={disabled}
      {...rest}
    >
      {children}
    </El>
  )
}
