import { Button } from "./Button"
import { DecoratedInput } from "./DecoratedInput"

export function ContactForm() {
  return (
    <form className='mx-auto flex w-6/12 flex-col gap-y-4'>
      <DecoratedInput type='text' label='Vaše jméno' placeholder='Zadejte své jméno' required />
      <div className='flex flex-row gap-9'>
        <DecoratedInput type='email' label='Váš e-mail' placeholder='Zadejte svůj email' required />
        <DecoratedInput type='tel' label='Vaše jméno' placeholder='Zadejte svoje číslo' />
      </div>
      <DecoratedInput
        component='textarea'
        rows={10}
        label='Vaše zpráva'
        placeholder='Zadejte svoji zprávu...'
        required
      />
      <Button size='large' type='submit' theme='off' className='w-fit self-end'>
        Odeslat zprávu
      </Button>
    </form>
  )
}
