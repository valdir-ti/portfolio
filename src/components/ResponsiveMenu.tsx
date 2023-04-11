import MenuItem from "./MenuItem"

const ResponsiveMenu = () => {
  return (
    <div className="absolute z-10 right-0 top-6 bg-gray-200 p-2 rounded">
        <MenuItem title="About" link="about"/>
        <MenuItem title="Experience" link="experience"/>
        <MenuItem title="Projects" link="projects"/>
        <MenuItem title="Contact" link="contact"/>
    </div>
  )
}

export default ResponsiveMenu