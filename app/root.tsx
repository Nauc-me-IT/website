import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

import tailwindStylesheetUrl from "./styles/tailwind.css"
import { getUser } from "./session.server"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
})

type LoaderData = {
  readonly user: Awaited<ReturnType<typeof getUser>>
}

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  })
}

const registerScript = `
if (CSS.paintWorklet) {
  CSS.paintWorklet.addModule('/registerPaint.js');
} else {
  alert("Your browser cannot run this demo. Consider Chrome or Edge instead")
}
`

export default function App() {
  return (
    <html lang='en' className='theme-dark h-full bg-background text-xsDeviceBody motion-safe:scroll-smooth xs:text-sm'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='h-full font-montserrat'>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script type='text/javascript' dangerouslySetInnerHTML={{ __html: registerScript }} />
      </body>
    </html>
  )
}
