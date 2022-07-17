import { useState } from "react"
import { Drawer } from "~/components/Drawer"
import { Typography } from "~/components/Typography"
import { DownArrow } from "../components/DownArrow"
export default function Inner() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <DownArrow className='-rotate-90 cursor-pointer' onClick={() => setIsOpen(true)} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Typography variant='h1'>Hello</Typography>
      </Drawer>
      <Typography variant='h1'>Visible all the time!</Typography>
    </>
  )
}
