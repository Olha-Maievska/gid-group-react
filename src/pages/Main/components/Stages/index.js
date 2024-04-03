import StagesList from './components/StagesList'

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
      </div>
    </section>
  )
}

export default Stages