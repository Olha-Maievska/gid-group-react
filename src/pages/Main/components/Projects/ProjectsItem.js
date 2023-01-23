import { useNavigate } from 'react-router-dom'

const ProjectsItem = (props) => {
  const { id, img, title, style, square } = props
  const navigate = useNavigate()

  function openProject() {
    window.scrollTo(0, 0)
    navigate(`/projects/${id}`)
  }

  return (
    <div className="projects__item">
      <div className="projects__item-img">
        <img src={img} alt={title} />
        <div className="projects__item-hover">
          <button className="projects__item-link" onClick={openProject}>Смотреть проект</button>
        </div>
      </div>
      <div className="projects__item-content">
        <div className="projects__item-title">{title}</div>
        <div className="projects__item-suptitle">Стиль - {style}</div>
        <div className="projects__item-num">{square} м2</div>
      </div>
    </div>
  )
}

export default ProjectsItem