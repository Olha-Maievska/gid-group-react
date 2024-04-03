import RepairTeamList from './components/RepairTeamList'
import ProjectsBtnElse from '@ui/Buttons/ProjectsBtnElse'
import { useNavigate } from 'react-router-dom'
import { openPage } from '@utils/utils'

import './repairTeam.scss'

const RepairTeam = () => {
  const navigate = useNavigate()

  function toTeam() {
    navigate('/team')
  }

  return (
    <div className="repair-team">
      <h2 className="title">OUR TEAM</h2>
      <div className="container">
        <RepairTeamList />
        <ProjectsBtnElse
          text="More employees"
          fn={() => openPage(toTeam)}
        />
      </div>
    </div>
  )
}

export default RepairTeam