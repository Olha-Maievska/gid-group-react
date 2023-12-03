import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { typeOfDoors } from '@data/calculatorData'
import OtherParamsItem from './OtherParamsItem'
import {
  addDoor,
  addSizeDoor,
  addDoorPrice,
  addFinishPrice,
} from '@store/calc/calcActions'

const OtherParams = () => {
  const [index, setIndex] = useState(null)
  const dispatch = useDispatch()
  const { door } = useSelector(state => state.calc)

  function handleActiveTypeOfDoor(ind, price, name) {
    setIndex(ind)
    dispatch(addDoorPrice(price))
    dispatch(addDoor(name))
    dispatch(addFinishPrice)
    dispatch(addSizeDoor('2.1'))
  }

  console.log(door);

  return (
    <div className="calc-param__other">
      <div className="calc-param__desc">Doors</div>

      {typeOfDoors.map((item) =>
        <OtherParamsItem
          key={item.id}
          className={`calc-param__other-item ${item.name === door ? 'active' : ''}`}
          fn={() => handleActiveTypeOfDoor(index, item.price, item.name)}
          {...item}
        />
      )}
    </div>
  )
}

export default OtherParams