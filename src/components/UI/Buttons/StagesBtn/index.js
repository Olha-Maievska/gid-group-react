import { useNavigate } from 'react-router-dom'
import { openPage } from '../../../../utils/utils'
import './stagesBtn.scss'

const StagesBtn = () => {
  const navigate = useNavigate()
  return (
    <button className="stages__btn" onClick={() => openPage(navigate('/services'))}>
      Начать
    </button>
  )
}

export default StagesBtn