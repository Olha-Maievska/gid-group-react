import StagesBtn from '@ui/Buttons/StagesBtn'
import StagesItem from '@main/Stages/StagesItem'
import {repairStages} from '@data/repair'

const RepairStagesList = () => {
  return (
    <div className="repair-stages__items">
      {repairStages.map(stage => 
        <StagesItem key={stage.id} {...stage} />
      )}
      <StagesBtn style={{marginTop: '60px'}} />
    </div>
  )
}

export default RepairStagesList