const ServicesItem = ({img, title, text}) => {
  return (
    <div className="services__item">
      <div className="services__item-img">
        <img src={img} alt="services" />
      </div>
      <div className="services__item-content">
        <h5 className="services__item-title">{title}</h5>
        <p className="services__item-text">{text}</p>
      </div>
    </div>
  )
}

export default ServicesItem