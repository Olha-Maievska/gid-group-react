import {Link} from 'react-router-dom'
import logo from './images/Logo.png'

import './logo.scss'

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <img className="logo__img" src={logo} alt="logo" />
    </Link>
  )
}

export default Logo