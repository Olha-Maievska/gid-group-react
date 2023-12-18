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
        {img ? (<img src={img} alt={title} />)
             : (<div className='projects__empty__img'/>)
        }
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