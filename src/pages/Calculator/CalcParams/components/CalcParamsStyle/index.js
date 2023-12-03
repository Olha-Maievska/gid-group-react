import { useSelector } from 'react-redux'
import { calcStyleData } from "@data/calculatorData"

const CalcParamsStyle = () => {
  const { calcStyle } = useSelector(state => state.calc)

  return (
    <>
      {!calcStyle ? (
        <div className="calc-param__img">
            <div className='calc-param__skeleton'>GID.Group</div>
            <h4 className="calc-param__img-title">Choose a style</h4>
            <p className="calc-param__img-text">
              Enter details about the apartment to get the exact cost of repairs
            </p>
          </div>
      ) :
        calcStyleData.map(style => {
          if (calcStyle === style.dataAttr) {
            return (
              <div className="calc-param__img" key={style.id}>
                  <img src={style.img} alt={style.style} /> 
                <h4 className="calc-param__img-title">{style.style}</h4>
                <p className="calc-param__img-text">
                  Enter details about the apartment to get the exact cost of repairs
                </p>
              </div>
            )} else return null
          }
        )
      }
    </>
  )
}

export default CalcParamsStyle