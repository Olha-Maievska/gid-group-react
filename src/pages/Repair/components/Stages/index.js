import RepairStagesList from './components/RepairStagesList'

import './repairStages.scss'

const RepareStages = () => {
  return (
    <section className="repair-stages">
      <h2 className="title">STAGES OF WORK COMPLETION</h2>
      <div className="container">
        <RepairStagesList />
      </div>
    </section>
  )
}

export default RepareStages