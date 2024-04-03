const GalleryItem = ({img, showModal}) => {
  return (
    <>
      <div className="gallery__item" onClick={showModal}>
        <img src={img} alt="Gallery Gid.Group" />
      </div>
    </>
  )
}

export default GalleryItem