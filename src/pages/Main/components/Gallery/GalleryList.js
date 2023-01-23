import { useDispatch, useSelector } from 'react-redux'
import { galleryData } from '@data/galleryData'
import { openModal } from '@store/modal/modalActions'
import Modal from '@ui/Modal'
import GalleryItem from './GalleryItem'

const GalleryList = () => {
  const { modal, modalSrc } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  return (
    <div className="gallery__inner">
      {galleryData.map(item => 
        <GalleryItem
          key={item.id}
          showModal={() => dispatch(openModal(item.img))}
          {...item}
        />
        )}
      {modal && <Modal img={modalSrc} />}
    </div>
  )
}

export default GalleryList