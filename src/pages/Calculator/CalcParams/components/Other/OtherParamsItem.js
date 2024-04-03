import { useDispatch, useSelector } from 'react-redux'
import {
  addDoorPrice,
  addFinishPrice,
  addSizeDoor,
  addDoor,
} from '@store/calc/calc-slice'

const OtherParamsItem = ({ name, img, heightOfDoor, className, price}) => {
  const dispatch = useDispatch()
  const { door, sizeDoor } = useSelector(state => state.calc)

  function handleHeightOfDoor(e, size) {
    if (e.target.textContent === '2.4') {
      dispatch(addDoorPrice(price + Number(500)))
    } else {
      dispatch(addDoorPrice(price))
    }
    dispatch(addSizeDoor(size))
    dispatch(addDoor(name))
    dispatch(addFinishPrice())
  }


  return (
    <div
      className={className}
    >
      <img src={img} alt={name} />
      <h5 className="calc-param__other-title">{name}</h5>
      <span>Door height</span>
      {heightOfDoor.map(({size, ind}) =>
        <button
          key={`$${size}${ind}`}
          className={`calc-param__other-link ${sizeDoor === size && name === door ? 'active' : ''}`}
          onClick={(event) => handleHeightOfDoor(event, size)}
        >
          {size}
        </button>
      )}
    </div>
  )
}

export default OtherParamsItem