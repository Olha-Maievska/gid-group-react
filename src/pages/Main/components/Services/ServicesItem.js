const ServicesItem = ({img, title, text}) => {
  return (
    <div className="services__item">
      <img className="services__item-img" src={img} alt="" />
      <div className="services__item-content">
        <h5 className="services__item-title">{title}</h5>
        <p className="services__item-text">{text}</p>
      </div>
    </div>
  )
}

export default ServicesItem