const DesignForItem = ({title, text}) => {
  return (
    <div className="design-for__item">
      <h4 className="design-for__item-title">{title}</h4>
      <p className="design-for__item-text">{text}</p>
    </div>
  )
}

export default DesignForItem