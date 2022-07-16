import { AboutUs } from "~/components/AboutUs"
import { CompanyBox } from "~/components/CompanyBox"
import { ContactForm } from "~/components/ContactForm"
import { Menu } from "~/components/Menu"
import { DownArrow } from "~/components/DownArrow"
import { Footer } from "~/components/Footer"
import { Landing } from "~/components/Landing"
import { How } from "~/components/How"
import { Packages } from "~/components/Packages"
import { Courses } from "~/components/Courses"

export default function Playground() {
  return (
    <div className='bg-landing bg-cover pt-20'>
      <Menu
        items={[
          {
            title: "Jak to funguje?",
            link: "#how",
          },
          {
            title: "Balíčky",
            link: "#packages",
          },
          {
            title: "Kurzy",
            link: "#courses",
          },
          {
            title: "O nás",
            link: "#about",
          },
          {
            title: "Pro firmy",
            link: "#company",
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
      <img src='/images/left.svg' className='fixed top-0 -left-20 hidden h-full 2xl:block' alt='' height='100vh' />
      <img src='/images/right.svg' className='fixed top-0 -right-20 hidden h-full 2xl:block' alt='' height='110vh' />

      <Landing />

      <DownArrow className='mx-auto mb-20' />

      <How />

      <Packages />

      <Courses />

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
        ]}
      />

      <CompanyBox />

      <ContactForm />

      <Footer />
    </div>
  )
}
