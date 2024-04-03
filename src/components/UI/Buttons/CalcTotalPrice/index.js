import './calcPrice.scss'

const CalcTotalPrice = ({price}) => {
  return (
    <div className="calc__price">
      Total price: <span>{price}$</span>
    </div>
  )
}

export default CalcTotalPrice