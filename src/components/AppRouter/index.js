import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector} from "react-redux"
import ModalCall from '../UI/ModalCall'
import Menu from '../Menu'
import Modal from '../UI/Modal'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import { routes } from '../../routes'
import { openModal} from '@store/modal/modal-slice'


const AppRouter = () => {
  const { menu, modal } = useSelector(state => state.modal)
  const [isOpenModalCall, setIsOpenModalCall] = useState(false)
  const dispatch = useDispatch()
  
  if (modal || menu) {
    let scroll = calcScroll();
    document.body.style.marginRight = `${scroll}px`;
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
  }

  function showModalCall() {
    setIsOpenModalCall(true)
    dispatch(openModal())
  }

  function calcScroll() {
    let div = document.createElement('div')
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'visibility';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn fn={showModalCall} />
      </Header>

      <Routes>
        {routes.map((route, i) => 
          <Route
            key={i}
            element={route.element}
            path={route.path}
            exact={route.exact}
          />
        )}
      </Routes>

      <Footer />
      
      { (modal && isOpenModalCall) && (
        <Modal isOpenModal={setIsOpenModalCall}>
          <ModalCall setIsOpenModalCall={setIsOpenModalCall} />
        </Modal>
      )}
      { menu && <Menu openModalCall={showModalCall}/> }
    </>
  )
}

export default AppRouter