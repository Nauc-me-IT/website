import { Horizontal, Logo, Facebook, Instagram } from "~/icons"
import { Typography } from "./Typography"
import { SocialButton } from "./Button"

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
            <SocialButton to='/'>
              <Facebook width={16} />
            </SocialButton>
            <SocialButton>
              <Instagram width={16} />
            </SocialButton>
          </div>
        </div>
        <div className='md:order-0 order-2 flex flex-col'>
          <Typography variant='normal'>Proč se přidat</Typography>
          <Typography variant='normal'>Jak to funguje</Typography>
          <Typography variant='normal'>Cenové balíčky</Typography>
          <Typography variant='normal'>Kontakt</Typography>
          <Typography variant='normal'>Přihlásit</Typography>
          <Typography variant='normal'>Registrovat</Typography>
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
