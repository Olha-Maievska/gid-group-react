const CalcAdditionallyItem = ({text, price}) => {
  return (
    <div className="calc-other__item">
      <div className="calc-other__list">
        <div className="calc-other__item-square"/>
        <div className="calc-other__item-text">{text}</div>
      </div>
      <div className="calc-other__item-price">
        from {price} $
      </div>
    </div>
  )
}

export default CalcAdditionallyItem
