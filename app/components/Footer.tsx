import { Horizontal, Logo, Facebook, Instagram } from "~/icons"
import { Typography } from "./Typography"
import { SocialButton } from "./Button"
import { Link } from "@remix-run/react"

export function Footer() {
  return (
    <>
      <Horizontal className='mx-auto my-16 max-w-full' />
      <div className='flex flex-row flex-wrap items-center justify-center gap-y-10 gap-x-6 pb-12 md:gap-x-32'>
        <Logo width={220} />
        <div className='flex w-full flex-col gap-4 md:w-auto'>
          <Typography variant='normal' className='text-center'>
            Jsme na sociálních sítích!
          </Typography>
          <div className='flex flex-row justify-center gap-6'>
            <SocialButton to='/' label='Facebook stránka - Nauč mě IT'>
              <Facebook width={16} />
            </SocialButton>
            <SocialButton label='Instagram stránka - Nauč mě IT'>
              <Instagram width={16} />
            </SocialButton>
          </div>
        </div>
        <div className='md:order-0 order-2 flex flex-col'>
          <Typography componentProps={{ to: "#home" }} component={Link} variant='normal'>
            Úvod
          </Typography>
          <Typography componentProps={{ to: "#how" }} component={Link} variant='normal'>
            Jak to funguje
          </Typography>
          <Typography componentProps={{ to: "#packages" }} component={Link} variant='normal'>
            Cenové balíčky
          </Typography>
          <Typography componentProps={{ to: "#courses" }} component={Link} variant='normal'>
            Kurzy
          </Typography>
          <Typography componentProps={{ to: "#about" }} component={Link} variant='normal'>
            O nás
          </Typography>
          <Typography componentProps={{ to: "#company" }} component={Link} variant='normal'>
            Pro firmy
          </Typography>
          <Typography componentProps={{ to: "#contact" }} component={Link} variant='normal'>
            Kontakt
          </Typography>
          <Typography componentProps={{ to: "#login" }} component={Link} variant='normal'>
            Registrovat
          </Typography>
        </div>
        <div className='flex flex-col gap-3'>
          <Typography variant='step'>Kontakt</Typography>
          <p>
            <Typography variant='normal' className='block'>
              Pavel Koudelka
            </Typography>
            <Typography variant='normal' className='block'>
              735 42 Český Těšín
            </Typography>
          </p>
          <p>
            <Typography variant='normal' className='block'>
              +420 705 099 099
            </Typography>
            <Typography variant='normal' className='block'>
              info@naucme.it
            </Typography>
          </p>
        </div>
      </div>
    </>
  )
}
