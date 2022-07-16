import { PackageBox } from "./PackageBox"
import { Typography } from "./Typography"

export function Packages() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 bg-alt pt-20 pb-28'>
      <Typography variant='h2' className='mb-8 text-center'>
        Začni se učit programovat ještě dnes!
      </Typography>
      <Typography variant='normal' className='mb-6 text-center' component='p'>
        Vyber si jeden z našich výhodných balíčků a ušetři pro začátek pár kaček
      </Typography>
      <div className='flex flex-row gap-8'>
        <PackageBox title='Basic' benefits={["Základní kurz testera", "Přístup na Discord"]} price={0} />
        <PackageBox
          title='Core'
          benefits={["Základní kurz testera", "Přístup na Discord", "5 konzultací"]}
          price={899}
        />
        <PackageBox
          title='Standard'
          benefits={["Základní kurz testera", "Přístup na Discord", "10 konzultací", "Privátní skupina na Discordu"]}
          price={1699}
        />
        <PackageBox
          title='Ultimate'
          benefits={[
            "Základní kurz testera",
            "Přístup na Discord",
            "15 konzultací",
            "Privátní skupina na Discordu",
            "Prioritní schůzky",
          ]}
          price={2199}
        />
      </div>
    </section>
  )
}
