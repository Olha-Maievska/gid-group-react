import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import CalcParamsStyle from "./components/CalcParamsStyle"
import PrevBtn from "@ui/Buttons/PrevBtn"
import CalcForm from "@components/form/CalcForm"
import CalcTotalPrice from '@ui/Buttons/CalcTotalPrice'
import ResetBtn from "@components/UI/Buttons/ResetBtn"
import OtherParams from "./components/Other"

import "./calcParams.scss"

const CalcParams = () => {
  const { finishPrice } = useSelector(state => state.calc)

  return (
    <main className="calc-param">
      <div className="container">
        <PrevBtn title={'style selection'}/>

        <div className="calc-param__inner">

          <CalcParamsStyle />

          <div className="calc-param__data">
            <CalcForm />
          </div> 
          <OtherParams />
        </div>
        <div className="calc__bottom"> 
          <CalcTotalPrice price={finishPrice} />
          <div className="calc__bottom__with__reset">
            <ResetBtn />
            <Link
              className="calc__btn"
              to="/calculatorAdditionally"
            >
              Show other options
            </Link>
          </div>
          
        </div>
      </div>
    </main>
  )
}

export default CalcParams