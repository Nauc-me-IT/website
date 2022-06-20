import { SocialButton } from "~/components/Button"
import { CompanyBox } from "~/components/CompanyBox"
import { types, Typography } from "~/components/Typography"
import { Facebook, LearnEarn, PayConsultancy, Time, Worldwide } from "~/icons"
import { CatchPoints } from "../components/CatchPoints"

export default function Playground() {
  return (
    <div className='h-screen bg-background'>
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
    </div>
  )
}
