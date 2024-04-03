import { useNavigate } from 'react-router-dom'

const FooterLink = ({ title, href }) => {
  const navigate = useNavigate()

  function openLink(path) {
    window.scrollTo(0, 0)
    navigate(path)
  }
  
  return (
    <div className="footer__menu-link" onClick={() => openLink(href)}>{title}</div>
  )
}

export default FooterLink 