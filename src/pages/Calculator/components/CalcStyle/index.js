import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addStylePrice } from "@store/calc/calcActions"


const CalcStyleItem = ({ img, style, price, dataAttr}) => {
  const [activeStyle, setActiveStyle] = useState(false)
  const [currentStyle, setCurrentStyle] = useState(null)
  const dispatch = useDispatch()
  // useEffect(() => setActiveStyle(!activeStyle), [activeStyle])

  function getStyle() {
    setActiveStyle(false)
    dispatch(addStylePrice(price))
  }

  return (
    <div
      className={activeStyle ? "calc-style__item active" : "calc-style__item"}
      data-style={dataAttr}
    >
      <div
        className="calc-style__img"
        onClick={getStyle}
      >
        <img src={img} alt={style} />
      </div>
      <div className="calc-style__desc">{style}</div>
    </div>
  )
}

export default CalcStyleItem