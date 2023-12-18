const StagesItem = ({img, title, text, num}) => {
  return (
    <div className="stages__item">
      <img className="stages__img" src={img} alt={title} />
      <div className="stages__title">
        <span className="stages__num">{num}</span>
        <h3>{title}</h3>
      </div>
      <div className="stages__content">
        <p className="stages__content-text">{text}</p>
      </div>
    </div>
  )
}

export default StagesItem