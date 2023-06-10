
import AboutImage from '../assets/about.jpg'

function About() {
  return (
    <div className='flex items-center justify-between max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      
      <div className='animate-fadeInUp delay-200 duration-400 w-2/5' >
        <h1 className='text-lg text-blue-800 mb-2 tracking-normal'>ABOUT COMPANY</h1>
        <h1 className='capitalize text-3xl font-bold tracking-wider mb-5'>Who we are</h1>
        <h2 className='text-gray-600 text-3xl font-semibold tracking-wide mb-8'>Over <span className='text-blue-800'>2500+</span> Customers</h2>
        
        <div className='border border-blue-300 mb-8'></div>

        <p className='text-gray-700 leading-relaxed'>
          We are a team of passionate IT professionals dedicated to delivering cutting-edge solutions to businesses of all sizes. Our expertise spans across a range of industries, and we are committed to providing customized services to suit your unique needs
        </p>
      </div>
      
      <div className='w-2/5 h-96 bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply rounded-lg' style={{ backgroundImage: `url(${AboutImage})` }}>
        
      </div>
    </div>
  )
}

export default About