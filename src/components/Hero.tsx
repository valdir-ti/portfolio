import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='home' className="pt-24 bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className='xl:max-w-[1000px] lg:max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-500'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Valdir Silva</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700]'>I'm a full-stack developer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm focused on
        building responsive full-stack web applications.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-600'>
            <Link to='work' smooth={true} duration={500}>View Projects</Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero