import React from 'react'

type MenuProps = {
    isVisible: boolean
}

const Menu = ({ isVisible }: MenuProps) => {
    const [showMenu, setShowMenu] = React.useState(isVisible)

    React.useEffect(() => {
        setShowMenu(isVisible)
    }, [isVisible])

    return (
    <>
        {showMenu ?
            <ul className="flex justify-between text-2xl">
                <li className="cursor-pointer">
                    <a href="#about">About</a>
                </li>
                <li className="cursor-pointer">
                    <a href="#experience">Experience</a>
                </li>
                <li className="cursor-pointer">
                    <a href="#projects">Projects</a>
                </li>
                <li className="cursor-pointer">
                    <a href="#contact">Contact</a>
                </li>
            </ul> : null
        }
    </>
  )
}

export default Menu