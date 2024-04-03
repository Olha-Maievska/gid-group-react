import React from 'react'

const ServicesDesignItem = ({title, text, img}) => {
  return (
    <div className="services-design__item">
      <div className="services-design__content">
      <div className="services-design__title">
        <h4>{title}</h4>
        </div>
        <p className="services-design__text">{text}</p>
      </div>
      <div className="services-design__img">
        <img src={img} alt={title} />
      </div>
    </div>
  )
}

export default ServicesDesignItem