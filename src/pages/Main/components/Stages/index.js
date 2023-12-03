import StagesList from './StagesList'
import StagesBtn from '@ui/Buttons/StagesBtn'

import './stages.scss'

const Stages = () => {
  return (
    <section className="stages">
      <div className="title">
        STAGES FROM REQUEST TO DELIVERY OF THE FINISHED PROJECT
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