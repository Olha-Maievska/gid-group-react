import { useDispatch } from 'react-redux'
import { closeModal } from '@store/modal/modalActions'

import './modal.scss'

const Modal = ({children, isOpenModal}) => {
  const dispatch = useDispatch()

  const close = () => {
    isOpenModal(false)
    dispatch(closeModal)
  }

  return (
    <div
      className="modal"
      onClick={close}
    >
      {children}
    </div>
  )
}

export default Modal