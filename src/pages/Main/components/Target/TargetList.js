import TargetItem from './TargetItem'
import {targetData} from '@data/targetData'

const TargetList = () => {
  return (
    <ul className="target__list">
      {targetData.map(item =>
        <TargetItem key={item.id} {...item} />
      )}
    </ul>
  )
}

export default TargetList