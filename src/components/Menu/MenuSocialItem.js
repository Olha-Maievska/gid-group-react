const MenuSocialItem = ({src, href}) => {
  return (
    <li className="main-menu__social-item">
      <a
        className="main-menu__social-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={src} alt=""/>
      </a>
    </li>
  )
}

export default MenuSocialItem