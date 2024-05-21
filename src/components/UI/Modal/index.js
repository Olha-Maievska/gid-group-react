import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '@store/modal/modal-slice'
import { resetStatePrice } from '@store/price/price-slice'

import './modal.scss'

const Modal = ({children}) => {
  const dispatch = useDispatch()
  const { modal } = useSelector(state => state.modal)

  const close = () => {
    dispatch(closeModal())
    dispatch(resetStatePrice())
  }

  return (
    <div
      className="modal"
      style={{animation: `${!modal ? 'modalClose' : 'modalOpen'} 1s`}}
      onClick={close}
    >
      {children}
    </div>
  )
}

export default Modal