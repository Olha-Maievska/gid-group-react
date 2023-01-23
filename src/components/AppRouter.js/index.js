import { Routes, Route } from 'react-router-dom'
import { useSelector} from "react-redux"

import ModalCall from '../UI/ModalCall'
import Menu from '../Menu';
import { routes } from '../../routes';

const AppRouter = () => {
  const { call, menu, modal } = useSelector(state => state.modal)
  
  if (modal) {
    let scroll = calcScroll();
    document.body.style.marginRight = `${scroll}px`;
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
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

      {call && <ModalCall />}
      {menu && <Menu />}
    </>
  )
}

export default AppRouter