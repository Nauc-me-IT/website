import type { To } from "history"
import { Link } from "@remix-run/react"
import * as React from "react"
import { Typography } from "./Typography"
type Props = {
  readonly image: string
  readonly side: "right" | "left"
  readonly title: string
  readonly children: React.ReactNode
  readonly link?: To
}

export function CourseBox({ image, side, title, children, link }: Props) {
  return (
    <div
      className={`flex flex-col ${
        side === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-center gap-x-36 gap-y-4 px-5`}
    >
      <img src={image} width={320} alt={`Ilustrace ke kurzu ${title}`} />
      <div className='flex w-fit max-w-lg flex-col'>
        <Typography variant='h3' component='h3' className='mb-8'>
          {title}
        </Typography>
        <Typography variant='normal' className='max-w-xsProse'>
          {children}
        </Typography>
        {link ? (
          <Typography variant='link' component={Link} componentProps={{ to: link }} className='py-5 underline'>
            Zjistit více {">"}
          </Typography>
        ) : null}
      </div>
    </div>
  )
}
