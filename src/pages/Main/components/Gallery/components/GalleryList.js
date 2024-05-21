import { useDispatch, useSelector } from 'react-redux'
import { galleryData } from '../data'
import { openModal } from '@store/modal/modal-slice'
import Modal from '@ui/Modal'
import GalleryItem from './GalleryItem'

const GalleryList = () => {
  const { modal, modalSrc } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  function openModalGallery(img) {
    dispatch(openModal({name: 'gallery', imgSrc: img}))
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
      {(modal === 'gallery') && (
        <Modal>
          <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
            <img src={modalSrc} alt="Gallery" />
          </div>
        </Modal>
        )}
    </div>
  )
}

export default GalleryList