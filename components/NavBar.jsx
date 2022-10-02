import {Disclosure} from '@headlessui/react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import Link from 'next/link';

const navigation = [
  {name: 'status', href: 'https://lnk.spin.rip/status', rel: [], target: '_blank', current: false},
  {name: 'github', href: 'https://lnk.spin.rip/github', rel: [], target: '_blank', current: false},
  {name: 'twitter', href: 'https://lnk.spin.rip/twitter', rel: [], target: '_blank', current: false},
  {name: 'coffee', href: 'https://lnk.spin.rip/totmcoffee', rel: [], target: '_blank', current: false},
  {name: 'e-z.bio', href: 'https://lnk.spin.rip/ezbio', rel: [], target: '_blank', current: false},
  {name: 'discord', href: 'https://lnk.spin.rip/ourescape', rel: [], target: '_blank', current: false},
  {name: 'email', href: '/email', current: false},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <Disclosure as='nav' className='bg-black/50 sm:bg-black/25 sticky top-0 z-50'>
      {({open}) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black/50 focus:outline-none'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <Link href='/' className='flex-shrink-0 flex items-center'>
                  <div className='flex-shrink-0 flex items-center cursor-pointer'>
                    <img
                      className='block lg:hidden h-8 w-auto'
                      src='https://cdn.spin.rip/r/spinfal-S.png'
                      alt='spinfal'
                      draggable='false'
                    />
                    <img
                      className='hidden lg:block h-8 w-auto'
                      src='https://cdn.spin.rip/r/spinfal.png'
                      alt='spinfal'
                      draggable='false'
                    />
                  </div>
                </Link>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        {...(item.rel?.length > 0 ? {rel: item.rel?.join(' ')} : {})}
                        className={classNames(
                          item.current ? 'bg-black/50 text-white' : 'text-gray-300 hover:bg-black/50 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium ' + `umami--contextmenu--nav-${item.name}-context umami--click--nav-${item.name}-click`
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-black/50 text-white' : 'text-gray-300 hover:bg-black/50 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
