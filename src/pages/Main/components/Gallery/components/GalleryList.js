import { useDispatch, useSelector } from 'react-redux'
import { galleryData } from '../data'
import { openModal } from '@store/modal/modal-slice'
import Modal from '@ui/Modal'
import GalleryItem from './GalleryItem'
import { useState } from 'react'

const GalleryList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { modal, modalSrc } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  function openModalGallery(img) {
    dispatch(openModal(img))
    setIsOpen(true)
  }

  return (
    <div className="gallery__inner">
      {galleryData.map(item => 
        <GalleryItem
          key={item.id}
          showModal={() => openModalGallery(item.img)}
          {...item}
        />
        )}
      {(modal && isOpen) && (
        <Modal isOpenModal={setIsOpen}>
          <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
            <img src={modalSrc} alt="Gallery" />
          </div>
        </Modal>
        )}
    </div>
  )
}

export default GalleryList