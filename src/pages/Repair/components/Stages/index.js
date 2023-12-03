import RepairStagesList from './RepairStagesList'
import StagesBtn from '@ui/Buttons/StagesBtn'

import './repairStages.scss'

const RepareStages = () => {
  return (
    <div className="repair-stages">
      <h2 className="title">STAGES OF WORK COMPLETION</h2>
      <div className="container">
        <RepairStagesList />
        <StagesBtn style={{marginTop: '40px'}} />
      </div>
    </div>
  )
}

export default RepareStages