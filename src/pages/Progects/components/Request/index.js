import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from '@store/modal/modalActions'
import Modal from '@components/UI/Modal'
import ModalCall from '@components/UI/ModalCall'

import './projectsRequest.scss'

const ProjectsRequest = () => {
  const [isOpenModalRequest, setIsOpenModalRequest] = useState(false)
  const { modal } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  function showPriceModal() {
    setIsOpenModalRequest(true)
    dispatch(openModal())
  }

  return (
    <>
    <div className="projects-page__request">
      <div className="projects-page__request-content">
        <p className="projects-page__request-text">Leave a request and we will help you with your project</p>
        <button className="projects-page__request-link" onClick={showPriceModal}>Submit your application</button>
      </div>
      </div>
      {(modal && isOpenModalRequest) && (
        <Modal isOpenModal={setIsOpenModalRequest}>
          <ModalCall setIsOpenModalCall={setIsOpenModalRequest} />
        </Modal>
      )}
    </>
  )
}

export default ProjectsRequest