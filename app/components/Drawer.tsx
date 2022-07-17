// eslint-disable-next-line functional/no-mixed-type
type DrawerProps = {
  readonly children: React.ReactNode
  readonly isOpen: boolean
  // eslint-disable-next-line functional/no-return-void
  readonly setIsOpen: (isOpen: boolean) => void
}

export function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={`fixed inset-0 z-10 transform overflow-hidden bg-form bg-opacity-5 ease-in-out
        ${
          isOpen
            ? "translate-x-0 opacity-100 transition-opacity duration-500"
            : "-translate-x-full opacity-0 transition-all delay-500"
        }
      `}
    >
      <section
        className={`delay-400 absolute left-0 h-full w-screen max-w-lg transform bg-background shadow-xl transition-all duration-500 ease-in-out ${
          isOpen ? " translate-x-0 " : "-translate-x-full"
        }`}
      >
        <article className='relative flex h-full w-screen max-w-lg flex-col space-y-6 overflow-y-auto pb-10'>
          {children}
        </article>
      </section>
      <section
        className=' h-full w-screen cursor-pointer '
        onClick={() => {
          setIsOpen(false)
        }}
      ></section>
    </main>
  )
}
