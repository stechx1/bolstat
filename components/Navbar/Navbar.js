// import React from 'react'
// import styles from './Navbar.module.css'
// const Navbar = () => {
//     return (
//         <nav className={`${styles.main_container} bg-white`}>
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                 <div className="relative flex h-16 items-center justify-between">
//                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                         {/* <!-- Mobile menu button--> */}
//                         <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//                             <span className="sr-only">Open main menu</span>
//                             {/* <!--
//                             Icon when menu is closed.

//                             Heroicon name: outline/bars-3

//                             Menu open: "hidden", Menu closed: "block"
//           --> */}
//                             <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                             </svg>
//                             {/* <!--
//                             Icon when menu is open.

//                             Heroicon name: outline/x-mark

//                             Menu open: "block", Menu closed: "hidden"
//           --> */}
//                             <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                         <div className="flex flex-shrink-0 items-center">
//                             <img className="block h-8 w-auto " src="/Images/logo.png" alt="Logo" />
//                         </div>
//                     </div>
//                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                         <div className="hidden sm:ml-6 sm:block">
//                             <div className="flex space-x-4">
//                                 {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
//                                 <a href="#" className="text-gray-500 px-3 py-2 rounded-md text-sm font-small" aria-current="page">Home</a>

//                                 <a href="#" className="text-gray-500 px-3 py-2 rounded-md text-sm font-small">Contact</a>

//                                 <a href="#" className="text-gray-500 px-3 py-2 rounded-md text-sm font-small">InLoggen</a>

//                                 <a href="#" className={`${styles.background} text-white px-3 py-2 rounded-md text-sm font-small`}>Abonneren</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Mobile menu, show/hide based on menu state. --> */}
//             <div className="hidden" id="mobile-menu">
//                 <div className="space-y-1 px-2 pt-2 pb-3">
//                     {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
//                     <a href="#" className=" text-gray-500 block px-3 py-2 rounded-md text-base font-small" aria-current="page">Home</a>

//                     <a href="#" className="text-gray-500 px-3 py-2 rounded-md text-sm font-small">Contact</a>

//                     <a href="#" className="text-gray-500 px-3 py-2 rounded-md text-sm font-small">InLoggen</a>

//                     <a href="#" className={`${styles.background} text-white px-3 py-2 rounded-md text-sm font-small`}>Abonneren</a>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar


import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import styles from './Navbar.module.css'

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Contact', href: '/', current: false },
    { name: 'InLoggen', href: '/', current: false },
    { name: 'Abonneren', href: '/', current: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className={`${styles.main_container} bg-white md:px-12 px-4 `}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-[4.8rem] items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center justify-center gap-6">
                                    <img className="block h-8 w-auto " src="/Images/logo.svg" alt="Logo" />
                                    <img className="block h-7 mt-1 w-auto " src="/Images/BolStats.png" alt="Name" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">

                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="flex md:space-x-7 sm:space-x-2 space-x-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? styles.background : 'text-gray-400',
                                                ' px-3 md:px-1 py-2 rounded-md text-sm font-small'
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

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? styles.background : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
    )
}
