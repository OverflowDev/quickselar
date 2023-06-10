import { useState } from 'react'

import Logo from '../assets/logo.png'

function Navbar() {

    const [isOPen, setIsOPen] = useState(false)

    const menu = () => {
        setIsOPen(!isOPen)
    }

  const closeMenu = () => setIsOpen(false)


  return (
    // <div className='fixed top-0 inset-x-0 z-10'>
    <div className='sticky top-0 z-50'>
        <nav className=" flex justify-between items-center text-center py-4 md:px-24 px-8 bg-gray-100 bg-main bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 shadow sm:items-baseline w-full">
            
            <div className='flex items-center justify-between lg:w-auto w-full z-50'>

                <div className="">
                    <img src={Logo} alt="logo" className='bg-cover w-full h-4' />
                </div>

                <div className="lg:hidden">
                    <button onClick={menu}>
                        {!isOPen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <div className="lg:flex items-center justify-around space-x-8 hidden">
                <button className="text-md font-semibold tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">About Us</button>
                <button className="text-md font-semibold tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">Service</button>
                <button className="text-md font-semibold tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">Blog</button>
                <button className="text-md font-semibold tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">Contact</button>
            </div>

            <div 
                className={`bg-white absolute top-0 bottom-0 w-full flex flex-col h-screen py-36 px-12 space-y-12 delay-200 duration-500 z-10 lg:hidden transition ${isOPen ? 'left-0' : 'left-[-100%]'}`}
            >
                <button onClick={closeMenu} className="text-md font-semibold tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">About Us</button>
                <button onClick={closeMenu} className="text-md font-semibold tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">Service</button>
                <button onClick={closeMenu} className="text-md font-semibold tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">Blog</button>
                <button onClick={closeMenu} className="text-md font-semibold tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">Contact</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar