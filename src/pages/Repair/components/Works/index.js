import { useNavigate } from 'react-router-dom'
import RepairWorksList from './RepairWorksList'
import ProjectsBtnElse from '@components/UI/Buttons/ProjectsBtnElse'
import {openPage} from '@utils/utils'

import './repairWorks.scss'

const RepairWorks = () => {
  const navigate = useNavigate()

  return (
    <div className="repair-works">
      <h2 className="title">ВЫПОЛНЕННЫЕ РАБОТЫ</h2>
      <div className="container">
        <RepairWorksList />
        <ProjectsBtnElse
          text="Портфолио"
          arrowRound={false}
          fn={() => openPage(navigate('/projects'))}
        />
      </div>
    </div>
  )
}

export default RepairWorks