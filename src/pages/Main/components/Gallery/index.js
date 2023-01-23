import title from './images/instagram-title.png'
import GalleryList from './GalleryList'

import './gallery.scss'

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <a
          className="gallery__title"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={title} alt="" />
        </a>
        <GalleryList />
      </div>
    </section>
  )
}

export default Gallery