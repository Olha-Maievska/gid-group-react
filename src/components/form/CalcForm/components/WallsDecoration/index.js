import { useDispatch, useSelector } from "react-redux"
import WallsDecorationItem from "./WallsDecorationItem"
import { addFinishPrice } from "@store/calc/calcActions"

const WallsDecoration = ({ data, title, actionPrice, actionColor, isPrice }) => {
  const dispatch = useDispatch()
  const { decor, floor } = useSelector(state => state.calc)

  function handleClick(price, color) {
    dispatch(actionColor(color))
    dispatch(actionPrice(price))
    dispatch(addFinishPrice)
  }

  function isActive(color) {
    return color === decor || color === floor ? 'active' : ''
  }
  
  return (
    <>
      <div className="calc-param__desc">{title}</div>
      <div className="calc-param__wrapper">
          {data.map((item) =>
            <WallsDecorationItem
              key={item.id}
              className={`calc-param__data-item ${isActive(item.colorName)}`}
              fn={() => handleClick(item.price, item.colorName)}
              {...item}
            />
          )}
      </div>
    </>
  )
}

export default WallsDecoration