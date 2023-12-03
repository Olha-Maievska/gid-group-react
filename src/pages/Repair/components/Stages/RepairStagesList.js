import StagesItem from '@main/Stages/StagesItem'
import {repairStages} from '@data/repair'

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