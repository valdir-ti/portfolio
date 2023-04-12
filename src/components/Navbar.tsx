import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

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
            <div className='hidden'></div>

        </div>
    )
}

export default Navbar