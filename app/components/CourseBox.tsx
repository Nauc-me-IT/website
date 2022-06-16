import * as React from "react"
import type { To } from "react-router-dom";
import { Link } from "react-router-dom"
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
    <div className={`flex ${side === "left" ? "flex-row" : "flex-row-reverse"} items-center`}>
      <div>
        <img className={`${side === "left" ? "mr-12" : "ml-12"}`} src={image} alt=''></img>
      </div>
      <div className='flex flex-col'>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='normal'>{children}</Typography>
        {link ? (
          <Typography variant='link'>
            <Link to={link}>Zjistit více</Link>
          </Typography>
        ) : null}
      </div>
    </div>
  )
}
