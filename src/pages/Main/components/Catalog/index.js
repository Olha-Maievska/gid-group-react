import CatalogForm from '@form/CatalogForm'
import img from './images/catalog.jpg'

import './catalog.scss'

const Catalog = ({title}) => {
  return (
    <section className="catalog">
      <h2 className="title">{title}</h2>
      <div className="container">
        <div className="catalog__inner">
          <div className="catalog__img">
            <img src={img} alt="" />
          </div>

          <div className="catalog__content">
            <h5 className="catalog__title">
              Leave your email to receive a catalog of our projects
            </h5>
            <p className="catalog__text">
              The catalog will help you choose a style and think through the layout of your apartment
            </p>

            <CatalogForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog