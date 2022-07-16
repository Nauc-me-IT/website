import { CourseBox } from "./CourseBox"
import { Typography } from "./Typography"

export function Courses() {
  return (
    <section>
      <Typography variant='h2' component='h2' className='my-20 text-center'>
        Možné pozice v průběhu kurzu
      </Typography>
      <CourseBox image='/images/qa_illustration.svg' side='right' title='Tester' link='/'>
        Práce testera je hledání chyb a upozorňování na ně srozumitelnou formou. Proto abys mohl být tester,
        nepotřebuješ mnoho.
      </CourseBox>
      <CourseBox image='/images/dev_illustration.svg' side='left' title='Vývojář' link='/'>
        Práce testera je hledání chyb a upozorňování na ně srozumitelnou formou. Proto abys mohl být tester,
        nepotřebuješ mnoho.
      </CourseBox>
    </section>
  )
}
