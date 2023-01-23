import RepairStagesItem from './RepairStagesItem'
import {repairStages} from '@data/repair.js'

import './repairStages.scss'

const RepairStages = () => {
  return (
    <div className="repair-stages__inner">
      {repairStages.map(stage =>
        <RepairStagesItem key={stage.title} {...stage} />
      )}
      </div>
  )
}

export default RepairStages