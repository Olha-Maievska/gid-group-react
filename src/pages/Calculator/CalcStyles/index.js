import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { calcStyleData } from "@data/calculatorData"
import { addStylePrice, addStyle} from "@store/calc/calcActions"
import CalcStyleItem from "./components/CalcStyle"
import CalcTotalPrice from "@ui/Buttons/CalcTotalPrice"

import './calcStyles.scss'

const CalcStyles = () => {
  const { calcStylePrice } = useSelector(state => state.calc)
  const dispatch = useDispatch()

  function handleClick(price, style) {
    dispatch(addStylePrice(price))
    dispatch(addStyle(style))
  }

  return (
    <main className="calc-style">
      <div className="container">
        <h4 className="calc-style__title">Repair calculator</h4>
        <div className="calc-style__inner">
          {calcStyleData.map((style) =>
            <CalcStyleItem
              key={style.id}
              handleClick={() => handleClick(style.price, style.dataAttr)}
              {...style}
            />
          )}
        </div>

        <div className="calc__bottom">
          <CalcTotalPrice price={calcStylePrice} />
          <Link className="calc__btn" to="/calculatorParams">Next</Link>
        </div>
      </div>
    </main>
  )
}

export default CalcStyles