
import AboutImage from '../assets/about.jpg'

function About() {
  return (
    <div className='bg-gray-100'>
      <div className='md:flex items-center justify-between md:max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        
        <div className='animate-fadeInUp delay-200 duration-400 md:w-2/5 ' >
          <div className='text-lg text-blue-800 mb-2 tracking-normal flex items-center gap-3'>
            <div className='bg-blue-700 w-1 h-6 rounded-md'></div>
            ABOUT COMPANY
          </div>
          <h1 className='capitalize text-3xl font-bold tracking-wider mb-5'>Who we are</h1>
          <h2 className='text-gray-600 text-3xl font-semibold tracking-wide mb-8'>Over <span className='text-blue-800'>2500+</span> Customers</h2>
          
          <div className='border border-blue-300 mb-8'></div>

          <p className='text-gray-700 leading-relaxed md:mb-0 mb-12'>
            We are a team of passionate IT professionals dedicated to delivering cutting-edge solutions to businesses of all sizes. Our expertise spans across a range of industries, and we are committed to providing customized services to suit your unique needs
          </p>
        </div>
        
        <div className='md:w-2/5 h-96 bg-center bg-cover bg-no-repeat bg-gray-400 bg-blend-multiply rounded-lg relative ' style={{ backgroundImage: `url(${AboutImage})` }}>
          <button className='animate-bounce animate-duration-1000 absolute inset-x-0 bottom-6 md:left-24 left-12 flex items-center justify-center space-x-8 bg-blue-700 text-white py-2 px-4 w-72 h-20 rounded-lg'>
            <h1 className='text-4xl'>27</h1>
            <h2>YEAR'S EXPERIENCE IT</h2>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About