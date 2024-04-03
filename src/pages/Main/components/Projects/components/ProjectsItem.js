import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addOneProject } from '@store/projects/projects-slice'

const ProjectsItem = ({ item, otherClass = '' }) => {
  const { id, img, title, style, square,  } = item
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function openProject() {
    window.scrollTo(0, 0)
    navigate(`/projects/${id}`)
    dispatch(addOneProject(item))
  }

  return (
    <div className={`projects__item ${otherClass}`}>
      <div className="projects__item-img">
        <img src={img} alt={title} />
        <div className="projects__item-hover">
          <button className="projects__item-link" onClick={openProject}>View project</button>
        </div>
      </div>
      <div className="projects__item-content">
        <div className="projects__item-title">{title}</div>
        <div className="projects__item-suptitle">Style - {style}</div>
        <div className="projects__item-num">{square} m2</div>
      </div>
    </div>
  )
}

export default ProjectsItem