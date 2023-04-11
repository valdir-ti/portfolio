type MenuItemProps = {
    title: string
    link: string
}

const MenuItem = ({ title, link }: MenuItemProps) => {
  return (
    <li className="cursor-pointer list-none mt-2 lg:text-3xl md:text-2xl">
        <a href={`#${link}`}>{title}</a>
    </li>
  )
}

export default MenuItem