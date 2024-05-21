import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector} from "react-redux"
import ModalCall from '@ui/ModalCall'
import Menu from '@components/Menu'
import Modal from '@ui/Modal'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import { routes } from '../../routes'
import { openModal} from '@store/modal/modal-slice'
import ScrollToTop from '@components/ScrollToTop'

const AppRouter = () => {
  const { menu, modal } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  function showModalCall() {
    dispatch(openModal({name: 'call'}))
  }

  useEffect(() => {
    const padding = window.innerWidth - document.body.offsetWidth

    if (modal || menu ) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${padding}px`
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = 0
    }
  }, [menu, modal])

  return (
    <div className="wrapper">
      <ScrollToTop /> 
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn fn={showModalCall} />
      </Header>

      <Routes >
        {routes.map((route) => 
          <Route
            key={route.path}
            element={route.element}
            path={route.path}
            exact={route.exact}
          />
        )}
      </Routes>

      <Footer />
      
      { (modal === 'request' || modal === 'call') && (
        <Modal >
          <ModalCall />
        </Modal>
      )}
      { menu && <Menu openModalCall={showModalCall}/> }
    </div>
  )
}

export default AppRouter