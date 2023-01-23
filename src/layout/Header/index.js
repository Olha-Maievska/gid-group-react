import './header.scss'

const Header = ({fone = 'rgba(0, 0, 0, .9)', children}) => {
  return (
    <header className="header" style={{background: `${fone}`}}>
      <div className="container">
        <div className="header__inner">
					{children}
        </div>
      </div>
  </header>
  )
}

export default Header