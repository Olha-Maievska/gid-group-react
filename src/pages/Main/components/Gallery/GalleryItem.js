const GalleryItem = ({img, showModal}) => {
  return (
    <>
      <div className="gallery__item" onClick={showModal}>
        <img src={img} alt="" />
      </div>
    </>
  )
}

export default GalleryItem