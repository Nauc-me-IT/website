import { Button } from "./Button"
import { Typography } from "./Typography"
export function CompanyBox() {
  return (
    <div className='bg-alt py-16'>
      <Typography variant='h2' className='mb-11 block text-center' component='h2'>
        Chcete s námi spolupracovat?
      </Typography>
      <Typography variant='normal' className='mb-6 text-center' component='p'>
        Hledáte zaměstnance a chcete se s námi spolupracovat?
      </Typography>
      <Button theme='main' classNames='block mx-auto' onClick={() => undefined}>
        Chci zaměstnance
      </Button>
    </div>
  )
}
