
function Service() {
  return (
    <div className="bg-blue-50 py-16">
      <div className='md:flex items-center justify-between md:max-w-screen-xl px-4 py-2 mx-auto sm:px-6 lg:px-8'>
          <div className='animate-fadeInUp delay-200 duration-400 md:w-2/5 ' >
            <h1 className='text-lg text-blue-800 mb-2 tracking-normal font-semibold flex items-center gap-3'>
              <div className='bg-blue-700 w-1 h-6 rounded-md'></div>
              OUR SERVICE
            </h1>
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

      <div className=" md:max-w-screen-xl px-4 mt-3 mx-auto sm:px-6 lg:px-8">
        <div className="md:flex gap-8 space-y-4">
          
          <div className="flex-col md:w-1/3 md:h-48 border-l border-blue-700 group hover:bg-blue-600 hover:text-white hover:rounded-lg animate-fadeInUp hover:delay-100 hover:duration-100 hover:transition-all px-6 py-2">
            
            <div className="flex items-center justify-center space-x-4 text-2xl group-hover:text-white text-blue-800 font-semibold tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              <h1>IT Management</h1>
            </div>

            <p className="py-1 tracking-wide leading-normal text-gray-600 group-hover:text-white font-normal group-hover:font-medium">
              We help businesses by making sure their technology systems work well and meet their goals. This includes tasks like fixing hardware and software, keeping the network safe, organizing data, and planning for future technology needs.
            </p>
          </div>
          <div className="flex-col md:w-1/3 md:h-48 border-l border-blue-700 group hover:bg-blue-600 hover:text-white hover:rounded-lg animate-fadeInUp hover:delay-100 hover:duration-100 hover:transition-all px-6 py-2">
            
            <div className="flex items-center justify-center space-x-4 text-2xl group-hover:text-white text-blue-800 font-semibold tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              <h1 className="tracking-wide">Software Engineering</h1>
            </div>

            <p className="py-1 tracking-wide leading-normal text-gray-600 group-hover:text-white font-normal group-hover:font-medium">
              We specialize in software engineering, which is the process of using engineering principles and methods to design, develop, and maintain high-quality software systems during development.
            </p>
          </div>
          <div className="flex-col md:w-1/3 md:h-48 border-l border-blue-700 group hover:bg-blue-600 hover:text-white hover:rounded-lg animate-fadeInUp hover:delay-100 hover:duration-100 hover:transition-all px-6 py-2">
            
            <div className="flex items-center justify-center space-x-4 text-2xl group-hover:text-white text-blue-800 font-semibold tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              <h1 className="tracking-wide">Cloud Computing</h1>
            </div>

            <p className="py-1 tracking-wide leading-normal font-normal group-hover:font-medium text-gray-600 group-hover:text-white">
              We assist businesses and individuals with cloud computing, which enables access to data, software, and other resources online. Our service helps to reduce costs, increase flexibility, and improve teamwork
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Service