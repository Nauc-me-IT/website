import { Facebook, Instagram } from "~/icons"
import { SocialButton } from "./Button"
import { Typography } from "./Typography"

export function AboutUs() {
  return (
    <div className={`flex flex-col items-center justify-center gap-x-36 gap-y-4 px-5 md:flex-row`}>
      <div className='flex w-fit max-w-xl flex-col'>
        <Typography variant='h2' className='mb-8'>
          O nás
        </Typography>
        <Typography variant='normal' className='mb-6 max-w-xsProse' component='p'>
          Práce testera je hledání chyb a upozorňování na ně srozumitelnou formou. Proto abys mohl být tester,
          nepotřebuješ mnoho. Práce testera je hledání chyb a upozorňování na ně srozumitelnou formou.
        </Typography>
        <Typography variant='normal' className='mb-10 max-w-xsProse' component='p'>
          Proto abys mohl být tester, nepotřebuješ mnoho.
        </Typography>
        <div className='flex flex-row gap-x-10 '>
          <SocialButton to='/'>
            <Facebook width={16} />
          </SocialButton>
          <SocialButton to='/'>
            <Instagram width={16} />
          </SocialButton>
        </div>
      </div>
      <div className='flex flex-row gap-x-20'>
        <div className='flex flex-col gap-y-2'>
          <img
            src={"/images/qa_illustration.webp"}
            width={"204px"}
            height={"220px"}
            alt={`Ilustrace ke kurzu`}
            loading='lazy'
          />
          <Typography variant='h3' component='h3'>
            Petr Glaser
          </Typography>
          <Typography variant='normal'>Staff Software Engineer</Typography>
          <Typography variant='link' className='underline'>
            info@naucme.it
          </Typography>
        </div>
        <div className='flex flex-col gap-y-2'>
          <img
            src={"/images/qa_illustration.webp"}
            width={"204px"}
            height={"220px"}
            alt={`Ilustrace ke kurzu`}
            loading='lazy'
          />
          <Typography variant='h3' component='h3'>
            Pavel Koudelka
          </Typography>
          <Typography variant='normal'>Sales</Typography>
          <Typography variant='link' className='underline'>
            info@naucme.it
          </Typography>
        </div>
        <div className='flex flex-col gap-y-2'>
          <img
            src={"/images/qa_illustration.webp"}
            width={"204px"}
            height={"220px"}
            alt={`Ilustrace ke kurzu`}
            loading='lazy'
          />
          <Typography variant='h3' component='h3'>
            Lýdie Hemalová
          </Typography>
          <Typography variant='normal'>Software Development Engineer in Test</Typography>
          <Typography variant='link' className='underline'>
            info@naucme.it
          </Typography>
        </div>
      </div>
    </div>
  )
}
