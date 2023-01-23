import CatalogForm from '@form/CatalogForm'
import img from './images/catalog.jpg'

import './catalog.scss'

const Catalog = () => {
  return (
    <section className="catalog">
      <h2 className="title">ПОЛУЧИТЕ КАТАЛОГ НАШИХ ПРОЕКТОВ</h2>
      <div className="container">
        <div className="catalog__inner">
          <div className="catalog__img">
            <img src={img} alt="" />
          </div>
          
          <div className="catalog__content">
            <h5 className="catalog__title">
              Оставьте ваш E-mail, чтобы получить каталог наших проектов
            </h5>
            <p className="catalog__text">
              Каталог поможет вам выбрать стиль и продумать планировку квартиры
            </p>

            <CatalogForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog