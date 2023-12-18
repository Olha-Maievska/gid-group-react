import { useDispatch, useSelector } from 'react-redux'
import {
  addDoorPrice,
  addFinishPrice,
  addSizeDoor
} from '@store/calc/calc-slice'

const OtherParamsItem = ({ name, img, heightOfDoor, className, fn, price}) => {
  const dispatch = useDispatch()
  const { door, sizeDoor } = useSelector(state => state.calc)

  function handleHeightOfDoor(e, size, name) {
    e.stopPropagation()
    if (e.target.textContent === '2.4') {
      dispatch(addDoorPrice(price + Number(500)))
    } else {
      dispatch(addDoorPrice(price))
    }
    dispatch(addFinishPrice())
    dispatch(addSizeDoor(size))
  }

  return (
    <div
      className={className}
      onClick={fn}
    >
      <img src={img} alt={name} />
      <h5 className="calc-param__other-title">{name}</h5>
      <span>Door height</span>
      {heightOfDoor.map(({size, id}) =>
        <button
          key={id}
          className={`calc-param__other-link ${sizeDoor === size && name === door ? 'active' : ''}`}
          onClick={(event) => handleHeightOfDoor(event, size)}
          disabled={name !== door}
        >
          {size}
        </button>
      )}
    </div>
  )
}

export default OtherParamsItem