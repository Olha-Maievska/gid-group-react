import { useDispatch } from 'react-redux'
import Header from '@layout/Header'
import Logo from '../Logo'
import MenuList from './MenuList'
import MenuSocial from './MenuSocial'
import CallBtn from '@ui/Buttons/CallBtn'
import CloseBtn from '@ui/Buttons/CloseBtn'
import { closeModalMenu } from '@store/modal/modalActions'

import './menu.scss'

const Menu = () => {
  const dispatch = useDispatch()

  const closeMenu = () => {
    dispatch(closeModalMenu())
  }
  
  return (
    <section className="main-menu">
      <div className="container">
        <Header fone='rgba(#131313, 95%)'>
          <CloseBtn close={closeMenu}/>
          <Logo />
          <CallBtn />
        </Header>
        <nav>
          <MenuList/>
        </nav>
        <MenuSocial/>
      </div>
    </section>
  )
}

export default Menu