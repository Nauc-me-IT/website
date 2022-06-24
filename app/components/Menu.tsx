import { Disclosure, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Fragment } from "react"

interface MenuItem {
  readonly link: string
  readonly title: string
  readonly active?: boolean
}

interface MenuProps {
  readonly items: readonly MenuItem[]
}

export function Menu({ items }: MenuProps) {
  return (
    <Disclosure as='nav' className='fixed top-0 z-20 w-screen bg-background/75 backdrop-blur-sm'>
      {({ open, close }) => (
        <>
          <div className='mx-auto max-w-7xl px-6 lg:px-0 2xl:max-w-7xl'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex flex-1 items-center justify-between sm:items-stretch'>
                <div className='invisible flex h-10 w-10 flex-shrink-0 items-center lg:hidden'>
                  {/* TODO: Add logo once it is done. */}
                </div>
                <div className='inset-y-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='hover:bg-gray-700 focus:ring-white z-10 inline-flex items-center justify-center rounded-md p-2 text-highlight hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset'>
                    <span className='sr-only'>Otevřít menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='hidden sm:block'>
                  <div className='flex space-x-4'>
                    {items.map((item) => (
                      <a
                        key={item.title}
                        href={item.link}
                        className={`
													${item.active ? "font-bold text-primary hover:text-secondary" : "text-highlight hover:text-primary"}
													rounded-md py-2 font-medium lg:px-3
												`}
                        aria-current={item.active ? "page" : undefined}
                        onClick={() => close()}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-250'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Disclosure.Panel className='w-screen bg-transparent sm:hidden'>
              <div className='px-2 pt-2 pb-3'>
                {items.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className={`
                      ${
                        item.active
                          ? "font-black text-primary hover:text-secondary"
                          : "text-highlight hover:text-primary"
                      }
                      tracking-wide block rounded-md px-3 py-2 text-center align-middle text-base font-medium leading-9
										`}
                    aria-current={item.active ? "page" : undefined}
                    onClick={() => close()}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
