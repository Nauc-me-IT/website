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
    <div className='h-screen bg-background pt-20'>
      <Menu
        items={[
          {
            title: "Úvod",
            link: "#home",
          },
          {
            title: "Jak to funguje?",
            link: "#about",
          },
          {
            title: "Balíčky",
            link: "#qa",
          },
          {
            title: "Kurzy",
            link: "#developer",
          },
          {
            title: "O nás",
            link: "#contact",
          },
          {
            title: "Pro firmy",
            link: "#contact",
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
