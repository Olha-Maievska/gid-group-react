import { useNavigate } from 'react-router-dom'
import RepairWorksList from './components/RepairWorksList'
import ProjectsBtnElse from '@components/UI/Buttons/ProjectsBtnElse'
import { openPage } from '@utils/utils'

import './repairWorks.scss'

const RepairWorks = () => {
  const navigate = useNavigate()

  function toPage() {
    navigate('/projects')
  }

  return (
    <div className="repair-works">
      <h2 className="title">COMPLETED WORKS</h2>
      <div className="container">
        <RepairWorksList countSlides={6}/>
        <ProjectsBtnElse
          text="Portfolio"
          arrowRound={false}
          fn={() => openPage(toPage)}
        />
      </div>
    </div>
  )
}

export default RepairWorks