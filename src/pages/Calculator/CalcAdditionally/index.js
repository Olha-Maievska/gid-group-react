import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import PrevBtn from "@ui/Buttons/PrevBtn"
import CalcTotalPrice from "@ui/Buttons/CalcTotalPrice"
import ResetBtn from "@components/UI/Buttons/ResetBtn"
import { additionallyData } from './data'
import CalcAdditionallyItem from "./components/CalcAdditionallyItem"

import "./CalcAdditionally.scss"

const CalcAdditionally = () => {
  const { finishPrice } = useSelector(state => state.calc)

  return (
    <main className="calc-other">
      <div className="container">
        <PrevBtn title={'options'}/>

        <h4 className="calc-other__option-title">Additional options</h4>
        <div className="calc-other__inner">
          <div className="calc-other__option">
            <div className="calc-other__wrapper">
              {additionallyData.map((item) => <CalcAdditionallyItem key={item.id} {...item} />)}
            </div>
          </div>
          <div className="calc-other__text">
            <p>
              You can choose warm floors in the kitchen, an additional bathroom, curtains for the windows and other options in our office
            </p>
          </div>
        </div>
        <div className="calc__bottom"> 
          <CalcTotalPrice price={finishPrice} />
          <div className="calc__bottom__with__reset">
            <ResetBtn />
            <Link
              className="calc__btn"
              to="/calculatorAdditionally"
            >
              Submit your application
            </Link>
          </div>
          
        </div>
      </div>
    </main>
  )
}

export default CalcAdditionally