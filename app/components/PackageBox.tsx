import { Button } from "./Button"
import { Typography } from "./Typography"
type Props = {
  readonly price: number
  readonly title: string
  readonly benefits: readonly string[]
}

const packageBoxBorderVars = {
  "--path": "30px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20px",
  "--border": "2px",
} as React.CSSProperties

export function PackageBox(props: Props) {
  return (
    <div
      className='polygon-path flex h-96 w-fit flex-col justify-around p-8 before:bg-form'
      style={packageBoxBorderVars}
    >
      <Typography variant='h3' className='mx-auto'>
        {props.title}
      </Typography>
      <ul className='list-dash'>
        {props.benefits.map((benefit) => (
          <Typography variant='normal' component='li' key={benefit}>
            {benefit}
          </Typography>
        ))}
      </ul>
      <Typography variant='h3' className='mx-auto'>
        {props.price} CZK
      </Typography>
      <Button theme='main' className='mx-auto w-fit'>
        Získat balíček
      </Button>
    </div>
  )
}
