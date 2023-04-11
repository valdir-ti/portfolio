import MenuItem from "./MenuItem"

const Menu = () => {
    return (
    <>
        <ul className="flex justify-between lg:text-3xl md:text-2xl">
            <MenuItem title="About" link="about"/>
            <MenuItem title="Experience" link="experience"/>
            <MenuItem title="Projects" link="projects"/>
            <MenuItem title="Contact" link="contact"/>
        </ul>
    </>
  )
}

export default Menu