import { useSelector } from "react-redux"

const CalcStyleItem = ({ handleClick, img, style, dataAttr }) => {
  const { calcStyle } = useSelector(state => state.calc)
  
  return (
    <div
      className={calcStyle === dataAttr ? "calc-style__item active" : "calc-style__item"}
      data-style={dataAttr}
    >
      <div
        className="calc-style__img"
        onClick={handleClick}
      >
          <img src={img} alt={style} />
      </div>
      <div className="calc-style__desc">{style}</div>
    </div>
  )
}

export default CalcStyleItem