import { useDispatch, useSelector } from 'react-redux'
import Header from '@layout/Header'
import Logo from '../Logo'
import MenuList from './components/MenuList'
import MenuSocial from './components/MenuSocial'
import CallBtn from '@ui/Buttons/CallBtn'
import CloseBtn from '@ui/Buttons/CloseBtn'
import { closeModalMenu } from '@store/modal/modal-slice'

import './menu.scss'

const Menu = ({ openModalCall }) => {
  const { menu } = useSelector(state => state.modal)

  const dispatch = useDispatch()

  const closeMenu = () => {
    dispatch(closeModalMenu())
  }

  return (
  <section className={`main-menu ${menu ? 'active' : 'disabled'}`} onClick={closeMenu}>
      <Header fone='rgba(#131313, 95%)'>
        <CloseBtn close={closeMenu}/>
        <Logo />
        <CallBtn fn={openModalCall} />
      </Header>
      <div className="container">
        <nav>
          <MenuList onClick={e => e.stopPropagation()}/>
        </nav>
        <MenuSocial/>
      </div>
    </section>
  )
}

export default Menu