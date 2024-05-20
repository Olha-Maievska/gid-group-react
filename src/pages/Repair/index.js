import Advantages from '@components/Advantages'
import RepairServices from './components/Services'
import RepairWorks from './components/Works'
import Catalog from '@main/Catalog'
import RepairStages from './components/Stages'
import RepairResult from './components/Result'
import RepairReviews from './components/Reviews'
import Request from '@components/Request'
import { repairBenefits } from './data'
import Intro from './components/Intro'

import './repair.scss'

const Repair = () => {
  return (
    <main className="repair">
      <Intro/>
      <Advantages data={repairBenefits} />
      <RepairServices />
      <RepairWorks />
      <RepairResult />
      <Catalog title="NOT READY TO ORDER REPAIRS YET?" />
      <RepairStages />
      <RepairReviews />

      <div className="container">
        <Request />
      </div>
    </main>
  )
}

export default Repair