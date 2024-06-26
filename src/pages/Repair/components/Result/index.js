import { repairResult } from './data'
import RepairResutItem from './components/RepairResutItem'

import './repairResult.scss'

const RepairResult = () => {
  return (
  <div className="repair-result">
    <h2 className="title">RESULT</h2>
    <div className="container">
      <div className="repair-result__inner">
          {repairResult.map(result =>
            <RepairResutItem key={result.id} {...result} />
          )}
      </div>
    </div>
  </div>
  )
}

export default RepairResult