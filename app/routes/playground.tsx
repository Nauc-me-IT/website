import { types, Typography } from "~/components/Typography"

export default function Playground() {
  return (
    <div className='h-screen bg-background'>
      {types.map((t, i) => (
        <Typography variant={t} key={`typography-${i}`} component='p' className='block'>
          Toto je test typografie, zkouška typografie.
        </Typography>
      ))}
    </div>
  )
}
