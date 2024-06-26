import { useDispatch, useSelector} from 'react-redux'
import WallsDecoration from './components/WallsDecoration'
import CalcFormInput from './components/Input/CalcFormInput'
import { wallsDecoration, floorDecor } from "@calc/CalcParams/data"
import {
  addSquarePrice,
  addSquare,
  addFinishPrice,
  addBathPrice,
  addBathSquare,
  addHeightPrice,
  addHeight,
  addDecorPrice,
  addDecor,
  addFloorPrice,
  addFloor,
} from '@store/calc/calc-slice'

const CalcForm = ({ prices}) => {
  const { square, height, bathSquare } = useSelector(state => state.calc)
  const dispatch = useDispatch()

  const handleChange = ({ target: { value } }, price, fn, val) => {
    value = value.replace(/[^\d.]/g, '')
    const totalPrice = value * price
    dispatch(val(value))
    dispatch(fn(totalPrice))
    dispatch(addFinishPrice())
  }

  return (
    <form>
      <CalcFormInput
        title="Square"
        valueName={!square ? '' : square}
        registerName="square"
        fn={e => handleChange(e, prices.priceForSquare, addSquarePrice, addSquare)}
      />
      <CalcFormInput
        title="Ceiling height"
        valueName={!height ? '' : height}
        registerName="height"
        fn={e => handleChange(e, prices.priceForHeight, addHeightPrice, addHeight)}
      />
      <CalcFormInput
        title="Bathroom area"
        valueName={!bathSquare? '' : bathSquare}
        registerName="squareBath"
        fn={e => handleChange(e, prices.priceForBath, addBathPrice, addBathSquare)}
      />
      <WallsDecoration
        title="Wall decoration"
        data={wallsDecoration}
        actionPrice={addDecorPrice}
        actionColor={addDecor}
      />
      <WallsDecoration
        title="Floor"
        data={floorDecor}
        actionPrice={addFloorPrice}
        actionColor={addFloor}
      />
    </form>
  )
}

export default CalcForm