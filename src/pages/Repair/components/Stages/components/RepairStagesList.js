import StagesItem from '@main/Stages/components/StagesItem'
import { repairStages } from '../data'

import '@main/Stages/stages.scss'

const RepairStagesList = () => {
  return (
    <div className="repair-stages__items">
      {repairStages.map(stage => 
        <StagesItem key={stage.id} {...stage} />
      )}
    </div>
  )
}

export default RepairStagesList