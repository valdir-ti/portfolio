import React from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import Logo from '../assets/logo.png'

function Navbar() {

    const [activeResponsiveMenu, setActiveResponsiveMenu] = React.useState(false)

    function handleOpenResponsiveMenu()  {
        setActiveResponsiveMenu(!activeResponsiveMenu)
    }

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            {/* logo */}
            <div>
                <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            {/* hamburguer */}
            <div className='md:hidden z-10'>
                {activeResponsiveMenu ?
                    <FaTimes onClick={handleOpenResponsiveMenu} className='cursor-pointer'/>
                    :
                    <FaBars onClick={handleOpenResponsiveMenu} className='cursor-pointer'/>
                }
            </div>

            {/* mobile menu */}
            {activeResponsiveMenu && <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Experience</li>
                    <li className='py-6 text-4xl'>Projects</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>
            }

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                        <a  className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/valdirti/'
                            target='_blank'
                            >
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333]'>
                        <a  className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/valdir-ti'
                            target='_blank'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]'>
                        <a  className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            LinkedIn <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
                        <a  className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar