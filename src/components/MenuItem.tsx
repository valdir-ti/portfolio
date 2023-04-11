type MenuItemProps = {
    title: string
    link: string
}

const MenuItem = ({ title, link }: MenuItemProps) => {
  return (
    <li className="cursor-pointer list-none mt-2">
        <a href={`#${link}`}>{title}</a>
    </li>
  )
}

export default MenuItem