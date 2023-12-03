import { Link } from 'react-router-dom'

const FooterLink  = ({title, href}) => {
  return (
    <Link className="footer__menu-link" to={href}>{title}</Link>
  )
}

export default FooterLink 