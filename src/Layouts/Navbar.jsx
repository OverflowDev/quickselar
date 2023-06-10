
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <div>
        <nav className="flex justify-between items-center text-center py-4 md:px-24 px-8 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
            </div>

            <div className="lg:hidden">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </button>
            </div>

            <div className="lg:flex items-center justify-around space-x-8 hidden">
                <button className="text-md font-medium tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">About Us</button>
                <button className="text-md font-medium tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">Service</button>
                <button className="text-md font-medium tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">Blog</button>
                <button className="text-md font-medium tracking-wide hover:border-b-2 hover:border-blue-600 hover:transition hover:text-blue-600">Contact</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar