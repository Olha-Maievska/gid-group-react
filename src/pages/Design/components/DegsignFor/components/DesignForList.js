import DesignForItem from './DesignForItem'
import { designForData } from '../data'

const DesignForList = () => {
  return (
    <div className="design-for__inner">
      {designForData.map(item =>
        <DesignForItem key={item.id} {...item} />
      )}
    </div>
  )
}

export default DesignForList
