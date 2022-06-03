/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

interface CSS {
  readonly paintWorklet: {
    // eslint-disable-next-line functional/no-return-void
    readonly addModule: (module: string) => void
  }
}

declare module "react" {
  interface CSSProperties {
    readonly [key: `--${string}`]: string | number
  }
}
