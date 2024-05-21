import { useDispatch } from 'react-redux'
import { closeModal } from '@store/modal/modal-slice'
import ModalCallForm from  './components/ModalCallForm'
import CloseBtn from '@ui/Buttons/CloseBtn'

import './modalCall.scss'

const ModalCall = () => {
  const dispatch = useDispatch()

  const closeModalCall = () => {
    dispatch(closeModal())
  }

  return (
    <div className="modal-call__wrapper" onClick={e => e.stopPropagation()}>
      <CloseBtn
        close={closeModalCall}
        other={{ position: 'absolute', top: '25px', right: '20px', fontSize: '30px' }}
      />
      <div className="modal-call__contant">
        <h3 className="modal-call__title">Back call</h3>
        <ModalCallForm />
      </div>
    </div>
  )
}

export default ModalCall