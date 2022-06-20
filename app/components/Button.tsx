import { Link } from "@remix-run/react"
import { typographyClasses } from "./Typography"

type Props = {
  readonly theme: "main" | "off"
  readonly disabled?: boolean
  readonly classNames?: string
}
// eslint-disable-next-line functional/no-return-void
type NormalButtonProps = Props & { readonly onClick: () => void }
type LinkButtonProps = Props & { readonly to: string }
type ButtonProps = (LinkButtonProps | NormalButtonProps) & { readonly children: string }
type SocialButtonProps = (Omit<NormalButtonProps, "theme"> | Omit<LinkButtonProps, "theme">) & {
  readonly children: React.ReactElement
}

const mainClasses =
  "border-none polygon-path focus-visible:outline-none before:bg-primary focus:before:bg-secondary text-center appearance-button"
const themeClasses = {
  main: "bg-primary",
  off: "bg-scroll bg-animable bg-clip-border bg-origin-padding bg-transparent bg-100/0 bg-bottom bg-no-repeat transition-all duration-500 ease hover:bg-100/100",
}
const polygonBorderVars = {
  "--path": "20% 0%, 90% 0%, 100% 20%, 100% 50%, 80% 100%, 20% 100%, 10% 100%, 0% 70%, 0% 40%",
  "--border": "2px",
} as React.CSSProperties
const hexagonBorderVars = {
  "--path": "30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%",
  "--border": "2px",
} as React.CSSProperties

export function Button({ classNames, disabled, children, theme, ...rest }: ButtonProps) {
  const props = {
    className: `${mainClasses} ${themeClasses[theme]} ${
      disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer hover:animate-wiggle"
    } ${"to" in rest ? "pointer-events-none" : "py-2 px-5"} ${typographyClasses.normal} ${classNames ?? ""}`,
    style: polygonBorderVars,
  }
  return "to" in rest ? (
    <button {...props}>
      <Link {...rest} className='pointer-events-auto inline-flex py-2 px-5'>
        {children}
      </Link>
    </button>
  ) : (
    <button {...props} {...rest}>
      {children}
    </button>
  )
}

export function SocialButton({ classNames, disabled, children, ...rest }: SocialButtonProps) {
  const props = {
    className: `${mainClasses} ${themeClasses.off} ${
      disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer hover:animate-wiggle"
    } ${"to" in rest ? "pointer-events-none" : "py-2 px-5"} ${typographyClasses.normal} ${
      classNames ?? ""
    } inline-flex items-center aspect-square`,
    style: hexagonBorderVars,
  }
  return "to" in rest ? (
    <button {...props}>
      <Link {...rest} className='pointer-events-auto inline-flex py-2 px-5'>
        {children}
      </Link>
    </button>
  ) : (
    <button {...props} {...rest}>
      {children}
    </button>
  )
}
