import RepairStagesList from './RepairStagesList'

import './repairStages.scss'

const RepareStages = () => {
  return (
    <div className="repair-stages">
      <h2 className="title">STAGES OF WORK COMPLETION</h2>
      <div className="container">
        <RepairStagesList />
      </div>
    </div>
  )
}

export default RepareStages