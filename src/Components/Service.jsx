
function Service() {
  return (
    <div className="bg-blue-50">
      <div className='md:flex items-center justify-between md:max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
          <div className='animate-fadeInUp delay-200 duration-400 md:w-2/5 ' >
            <h1 className='text-lg text-blue-800 mb-2 tracking-normal font-light'>OUR SERVICE</h1>
            <h2 className='text-gray-800 text-3xl font-semibold tracking-wide mb-8'>
            We Offer a Wide Variety of IT Services
            </h2>
          </div>
          <div className=''>
            <button className='flex items-center justify-center bg-blue-700 text-white py-2 px-4 w-36 h-12 rounded-lg'>
              <span>See More</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
      </div>

      <div className="mt-8">

      </div>
    </div>
  )
}

export default Service