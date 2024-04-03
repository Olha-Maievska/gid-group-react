import { useDispatch } from 'react-redux'
import { openModalMenu } from '@store/modal/modal-slice'

import './menuBtn.scss'

const MenuBtn = () => {
  const dispatch = useDispatch()
  
  return (
    <button className="menu" onClick={() => dispatch(openModalMenu('active'))}>
      <div></div>
    </button>
  )
}

export default MenuBtn