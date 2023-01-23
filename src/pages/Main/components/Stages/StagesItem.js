const StagesItem = ({img, title, text, num, btn = null}) => {
  return (
    <div className="stages__item">
      <img className="stages__img" src={img} alt={title} />
      <span className="stages__num">{num}</span>
      <h5 className="stages__title">{title}</h5>
      <div className="stages__content">
        <p className="stages__content-text">{text}</p>
        <button className={btn ? "stages__content-link" : null}>{btn}</button>
      </div>
    </div>
  )
}

export default StagesItem