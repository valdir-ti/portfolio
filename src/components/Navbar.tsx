import { RxHamburgerMenu } from 'react-icons/rx'

import Menu from './Menu'

function Navbar() {
  return (
    <div className="flex justify-between pt-10 xl:pl-32 xl:pr-32 md:pl-24 md:pr-24 sm:pl-10 sm:pr-10">
        <div className="flex-1">
            <a className="xl:text-4xl sm:text-3xl" href="/">John Doe</a>
        </div>
        <div className="xl:w-2/4 md:w-full xl:block sm:hidden">
            <Menu isVisible/>
        </div>
        <div className="w-1/3 xl:hidden md:flex sm:flex justify-end">
            <div className="cursor-pointer">
                <RxHamburgerMenu size={18} />
                <Menu isVisible={false} />
            </div>
        </div>
    </div>
  )
}

export default Navbar