import arrow from './images/round-arrow.svg'

import './projectsBtnElse.scss'

const ProjectsBtnElse = ({text, arrowRound = true, addProject, isDisabled}) => {
  return (
    <button
      className="projects__btn"
      onClick={addProject}
      style={{display: `${isDisabled ? 'none' : 'flex'}`}}
    >
      {arrowRound && <img className="projects__btn-img" src={arrow} alt="" />}
      <span>{text}</span>
    </button>
  )
}

export default ProjectsBtnElse