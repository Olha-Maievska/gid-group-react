import { Link } from 'react-router-dom'
import priceImg from './images/price-bonus.png'

import './price.scss'

const Price = () => {
  return (
    <section className="price">
      <h2 className="title">СТОИМОСТЬ ПРОЕКТА</h2>
      <div className="container">
        <div className="price__inner">
          <div className="price__content">
            <h4 className="price__content-title">
                Узнайте стоимость дизайн-проекта, ответив на 3 вопроса
            </h4>
            <p className="price__content-text">
                Пройдите короткий тест, узнайте цену, получите консультацию по будущему проекту
            </p>
            <Link className="price__content-btn" to="/">Узнать стоимость</Link>
          </div>
          <div className="price__bonus">
            <img className="price__bonus-img" src={priceImg} alt="Бонусы" />
            <ul className="price__bonus-list">Бонусы:
              <li className="price__bonus-item">
                чек листы на 5 ошибок в строительстве
              </li>
              <li className="price__bonus-item">
                5 трендов 2021 года на дизайн интерьеров
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price