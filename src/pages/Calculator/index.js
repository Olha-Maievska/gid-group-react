import { useSelector } from 'react-redux'
import { useRef } from "react"
import Header from '@layout/Header'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import { calcStyleData } from '@data/calculatorData'
import CalcStyleItem from './components/CalcStyle'

import './calc.scss'

const Calculator = () => {
  const { calcStylePrice } = useSelector(state => state.calc)
  const styleRef = useRef()

  console.log(styleRef.current);
  
  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>

      <main className="calc-style">
        <div className="container">
          <h4 className="calc-style__title">Калькулятор ремонта</h4>
          <div className="calc-style__inner" ref={styleRef}>
            {calcStyleData.map(style =>
              <CalcStyleItem key={style.id} {...style} />
            )}
          </div>

          <div className="calc__bottom">
            <div className="calc__price">
              Стоимость ремонта: <span>{calcStylePrice}</span> грн.
            </div>
            <a className="calc__btn" href="./calc-param.html">Далее</a>
          </div>
        </div>
       </main>
    </>
  )
}

export default Calculator