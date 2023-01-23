import { useDispatch } from 'react-redux'
import {openModalMenu} from '@store/modal/modalActions'

import './menuBtn.scss'

const MenuBtn = () => {
  const dispatch = useDispatch()
  return (
    <button className="menu" onClick={() => dispatch(openModalMenu())}>
      <div></div>
    </button>
  )
}

export default MenuBtn