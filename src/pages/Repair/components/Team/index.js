import RepairTeamList from './RepairTeamList'
import ProjectsBtnElse from '@ui/Buttons/ProjectsBtnElse'
import { useNavigate } from 'react-router-dom'
import {openPage} from '@utils/utils'

import './repairTeam.scss'

const RepairTeam = () => {
  const navigate = useNavigate()

  return (
    <div className="repair-team">
      <h2 className="title">НАША КОМАНДА</h2>
      <div className="container">
        <RepairTeamList />
        <ProjectsBtnElse
          text="Еще сотрудники"
          fn={() => openPage(navigate('/team'))}
        />
      </div>
    </div>
  )
}

export default RepairTeam