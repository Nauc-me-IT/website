import type { Transformer } from "remix-image"
import { MimeType } from "remix-image"
import sharp from "sharp"

const supportedInputs = new Set([MimeType.JPEG, MimeType.PNG, MimeType.WEBP, MimeType.TIFF, MimeType.AVIF])

const supportedOutputs = new Set([MimeType.AVIF, MimeType.WEBP])

export const sharpTransformer: Transformer = {
  name: "sharpTransformer",
  supportedInputs,
  supportedOutputs,
  transform: async (
    { data },
    { contentType: outputContentType, width, height, fit, position, background, quality, compressionLevel },
  ) => {
    const image = sharp(data)

    image
      .resize(width, height, {
        fit,
        position,
        ...(background && {
          background: {
            r: background[0],
            g: background[1],
            b: background[2],
            alpha: background[3],
          },
        }),
      })
      .jpeg({
        quality,
        progressive: true,
        force: outputContentType === MimeType.JPEG,
      })
      .png({
        progressive: true,
        compressionLevel,
        force: outputContentType === MimeType.PNG,
      })
      .avif({
        quality,
        force: outputContentType === MimeType.AVIF,
        speed: 0,
        effort: 9,
      })
      .webp({
        quality,
        force: outputContentType === MimeType.WEBP,
        effort: 6,
      })

    return image.toBuffer()
  },
}
