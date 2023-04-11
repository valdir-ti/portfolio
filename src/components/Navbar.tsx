import React from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

import Menu from './Menu'
import ResponsiveMenu from './ResponsiveMenu'

function Navbar() {

    const [activeResponsiveMenu, setActiveResponsiveMenu] = React.useState(false)

    function handleOpenResponsiveMenu()  {
        setActiveResponsiveMenu(!activeResponsiveMenu)
    }

    return (
        <div className="flex items-center justify-between pt-10 xl:pl-32 xl:pr-32 md:pl-24 md:pr-24 sm:pl-10 sm:pr-10 xs:pl-4 xs:pr-4 xs:pt-4">
            <div className="flex-1">
                <a className="xl:text-4xl sm:text-3xl" href="/">Valdir Silva</a>
            </div>
            <div className="xl:w-2/4 md:w-3/5 xl:block md:block xs:hidden">
                <Menu />
            </div>
            <div className="xl:w-1/3 lg:hidden md:hidden sm:block">
                <div className="cursor-pointer relative">
                    {activeResponsiveMenu ? <RxCross1  size={18} onClick={handleOpenResponsiveMenu} /> : <RxHamburgerMenu size={18} onClick={handleOpenResponsiveMenu} />}
                    {activeResponsiveMenu && <ResponsiveMenu />}
                </div>
            </div>
        </div>
    )
}

export default Navbar