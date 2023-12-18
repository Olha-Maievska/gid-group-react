import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { closeModalMenu } from '@store/modal/modal-slice'

const MenuItem = ({ title, href }) => {
  const dispatch = useDispatch()

  function closeMenu() {
    window.scrollTo(0, 0)
    dispatch(closeModalMenu())
  }

  return (
    <li className="main-menu__item">
      <Link
        className="main-menu__link"
        to={href}
        onClick={closeMenu}
      >
        {title}
      </Link>
    </li>
  )
}

export default MenuItem