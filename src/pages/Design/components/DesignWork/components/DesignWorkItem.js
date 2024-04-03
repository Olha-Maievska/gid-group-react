const DesignWorkItem = ({img, title, text}) => {
  return (
    <div className="design-work__item">
      <div className="design-work__item-content">
        <img className="design-work__item-img" src={img} alt={title} />
        <div className="design-work__item-title">{title}</div>
      </div>
      <p className="design-work__item-text">{text}</p>
    </div>
  )
}

export default DesignWorkItem