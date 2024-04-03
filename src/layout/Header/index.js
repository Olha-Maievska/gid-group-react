import { useSelector } from 'react-redux'

import './header.scss'

const Header = ({ fone = 'rgba(0, 0, 0, .9)', children}) => {
  const { menu, modal } = useSelector(state => state.modal)
  let paddingOffset = window.innerWidth - document.body.offsetWidth

  return (
    <header className="header" style={{background: `${fone}`, paddingRight: `${(menu || modal) ? paddingOffset : 0}px`}} >
      <div className="container">
        <div className="header__inner">
					{children}
        </div>
      </div>
    </header>
  )
}

export default Header