import { useDispatch } from 'react-redux'
import { closeModal } from '@store/modal/modalActions'

import './modal.scss'

const Modal = ({img}) => {
  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeModal())
  }

  return (
    <div
      className="modal"
      onClick={close}
    >
      <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Modal