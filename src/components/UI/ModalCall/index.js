import { useDispatch } from 'react-redux'
import { closeModalCall } from '@store/modal/modalActions'
import ModalCallForm from '@form/ModalCallForm'
import CloseBtn from '@ui/Buttons/CloseBtn'

import './modalCall.scss'

const ModalCall = () => {
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(closeModalCall())
  }

  return (
    <div
      className="modal-call"
      onClick={closeModal}
    >
      <div className="modal-call__wrapper" onClick={e => e.stopPropagation()}>
        <CloseBtn
          close={closeModal}
          other={{ position: 'absolute', top: '25px', right: '20px', fontSize: '30px' }}
        />
        <div className="modal-call__contant">
          <h3 className="modal-call__title">Обратный звонок</h3>
          <ModalCallForm />
        </div>
      </div>
    </div>
  )
}

export default ModalCall