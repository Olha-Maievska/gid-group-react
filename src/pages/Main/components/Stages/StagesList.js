import StagesItem from './StagesItem'
import { stagesData} from '@data/stagesData'

const StagesList = () => {
  return (
    <div className="stages__items">
      {stagesData.map(item => 
        <StagesItem key={item.id} {...item} />
      )}
    </div>
  )
}

export default StagesList