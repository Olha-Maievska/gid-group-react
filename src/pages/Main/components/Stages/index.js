import StagesList from './StagesList'
import StagesBtn from '@ui/Buttons/StagesBtn'

import './stages.scss'

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
        <StagesBtn />
      </div>
    </section>
  )
}

export default Stages