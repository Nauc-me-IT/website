import { LearnEarn, PayConsultancy, Time, Worldwide } from "~/icons"
import { Button } from "./Button"
import { CatchPoints } from "./CatchPoints"
import { Typography } from "./Typography"

export function Landing() {
  return (
    <main className='flex flex-row items-center justify-center'>
      <div>
        <Typography variant='h2' component='h1'>
          Nauč se programovat
        </Typography>
        <Typography variant='h1' component='h1' className='uppercase'>
          a nech si za to platit!
        </Typography>
        <Typography variant='normal' component='p' className='max-w-xsProse'>
          Klademe si za cíl pomoci komukoliv získat dovednosti a{"\u00A0"}znalosti vhodné pro práci v IT. To vše bez
          časových limitací a za cenu dostupnou pro každého.
        </Typography>
        <div className='mt-20 grid grid-cols-2 grid-rows-2'>
          <CatchPoints icon={<LearnEarn />}>Učíš se a zároveň vyděláváš</CatchPoints>
          <CatchPoints icon={<PayConsultancy />}>Platíš pouze za konzultace s{"\u00A0"}odborníkem z oboru</CatchPoints>
          <CatchPoints icon={<Time />}>
            Rychlost kurzu si{"\u00A0"}určuješ{"\u00A0"}sám
          </CatchPoints>
          <CatchPoints icon={<Worldwide />}>Celý kurz je online přístupný odkudkoliv</CatchPoints>
        </div>
        <Button theme='off' size='large' className='mt-20'>
          Vyzkoušej ZDARMA
        </Button>
      </div>
      <img src='/images/main_illustration.svg' width='870px' height='726px' alt='Ilustrační úvodní obrázek' />
    </main>
  )
}
