import type { LoaderFunction } from "@remix-run/server-runtime"
import { imageLoader, DiskCache } from "remix-image/server"
import { sharpTransformer } from "~/imageTransformer"

const config = {
  selfUrl: "http://localhost:3000",
  cache: new DiskCache(),
  transformer: sharpTransformer,
}

export const loader: LoaderFunction = ({ request }) => {
  return imageLoader(config, request)
}
