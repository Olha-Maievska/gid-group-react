import { typeOfDoors } from '../../data'
import OtherParamsItem from './OtherParamsItem'

const OtherParams = () => {
  return (
    <div className="calc-param__other">
      <div className="calc-param__desc">Doors</div>

      {typeOfDoors.map((item) =>
        <OtherParamsItem
          key={item.id}
          className="calc-param__other-item"
          {...item}
        />
      )}
    </div>
  )
}

export default OtherParams