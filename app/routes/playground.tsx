import { AboutUs } from "~/components/AboutUs"
import { SocialButton } from "~/components/Button"
import { CompanyBox } from "~/components/CompanyBox"
import { ContactForm } from "~/components/ContactForm"
import { CourseBox } from "~/components/CourseBox"
import { Step } from "~/components/Step"
import { types, Typography } from "~/components/Typography"
import { Facebook, LearnEarn, PayConsultancy, Time, Worldwide } from "~/icons"
import { CatchPoints } from "~/components/CatchPoints"
import { Menu } from "~/components/Menu"
import { DownArrow } from "~/components/DownArrow"
import { PackageBox } from "~/components/PackageBox"
import { Footer } from "~/components/Footer"

export default function Playground() {
  return (
    <div className='h-screen bg-background pt-20'>
      <Menu
        items={[
          {
            title: "Úvod",
            link: "#home",
          },
          {
            title: "O kurzu",
            link: "#about",
          },
          {
            title: "Tester",
            link: "#qa",
          },
          {
            title: "Vývojář",
            link: "#developer",
          },
          {
            title: "Kontakt",
            link: "#contact",
          },
          {
            title: "Přihlásit se",
            link: "#login",
            isImportant: true,
          },
        ]}
      />

      <div className='flex h-96 flex-row items-center justify-center gap-4'>
        <PackageBox title='Basic' benefits={["Základní kurz testera", "Neomezený přístup"]} price={0} />
        <PackageBox
          title='Core'
          benefits={["Basic balíček", "5 konzultací", "Přístup na Discord", "Privátní skupina", "Prioritní schůzky"]}
          price={0}
        />
      </div>
      <DownArrow />

      <ContactForm />

      <AboutUs
        people={[
          {
            name: "Petr Glaser",
            email: "petr.glaser@naucme.it",
            position: "Staff Software Engineer",
            image: "/images/qa_illustration.svg",
          },
          {
            name: "Pavel Koudelka",
            email: "pavel.koudelka@naucme.it",
            position: "Sales",
            image: "/images/qa_illustration.svg",
          },
          {
            name: "Lýdie Hemalová",
            email: "lydie.hemalova@naucme.it",
            position: "Software Engineer in Test",
            image: "/images/qa_illustration.svg",
          },
        ]}
      />

      <CourseBox image='/images/qa_illustration.svg' side='right' title='Tester' link='/'>
        Práce testera je hledání chyb a upozorňování na ně srozumitelnou formou. Proto abys mohl být tester,
        nepotřebuješ mnoho.
      </CourseBox>
      <CourseBox image='/images/dev_illustration.svg' side='left' title='Vývojář' link='/'>
        Práce testera je hledání chyb a upozorňování na ně srozumitelnou formou. Proto abys mohl být tester,
        nepotřebuješ mnoho.
      </CourseBox>

      <SocialButton to='/'>
        <Facebook />
      </SocialButton>
      <SocialButton onClick={() => alert("click works")}>
        <Facebook />
      </SocialButton>

      <CatchPoints icon={<LearnEarn />}>Učíš se a zároveň vyděláváš</CatchPoints>
      <CatchPoints icon={<PayConsultancy />}>Platíš pouze za konzultace s{"\u00A0"}odborníkem z oboru</CatchPoints>
      <CatchPoints icon={<Time />}>Rychlost kurzu si určuješ sám</CatchPoints>
      <CatchPoints icon={<Worldwide />}>Celý kurz je online přístupný odkudkoliv</CatchPoints>

      {types.map((t, i) => (
        <Typography variant={t} key={`typography-${i}`} component='p' className='block'>
          Toto je test, zkouška.
        </Typography>
      ))}

      <CompanyBox />

      <Step order={3}>Zaregistruj se ZDARMA do kurzu</Step>

      <Footer />
    </div>
  )
}
