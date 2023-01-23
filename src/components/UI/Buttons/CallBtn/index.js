import { useDispatch } from 'react-redux'
import {openModalCall} from '@store/modal/modalActions'
import phone from './images/phone.svg'

import './callBtn.scss'

const CallBtn = () => {
  const dispatch = useDispatch()

  return (
    <button className="phone" onClick={() => dispatch(openModalCall())}>
      <img src={phone} alt="phone" />
    </button>
  )
}

export default CallBtn