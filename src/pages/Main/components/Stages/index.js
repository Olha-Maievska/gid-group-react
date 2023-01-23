import StagesList from './StagesList'

import './stages.scss'
import { Link } from 'react-router-dom'

const Stages = () => {
  return (
    <section className="stages">
      <div className="title">
        6 ЭТАПОВ ОТ ЗАЯВКИ ДО СДАЧИ ГОТОВОГО ОБЪЕКТА
      </div>
      <div className="container">
        <div className="stages__inner">
          <StagesList/>
        </div>
        <Link className="stages__btn repair-stages__btn" to="/">
          Начать
        </Link>
      </div>
    </section>
  )
}

export default Stages