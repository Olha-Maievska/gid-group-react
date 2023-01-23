import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectsList from './ProjectsList'
import ProjectsBtnElse from '@ui/Buttons/ProjectsBtnElse'
import { projectsData } from '@data/projectsData'

import './projects.scss'

const Projects = () => {
  const [items, setItems] = useState([])
  const [offset, setOffset] = useState(6)
  const [start, setStart] = useState(0)
  const navigate = useNavigate()

  const addProjects = () => {
    window.scrollTo(0, 0)
    navigate('/projects')
  }

  useEffect(() => {
    setItems(projectsData.slice(start, offset))
  }, [offset, start])
  
  return (
    <section className="projects">
      <h2 className="title">НАШИ ПРОЕКТЫ</h2>
      <ProjectsList data={items} />
      <ProjectsBtnElse text="Еще проекты" addProject={addProjects} />
    </section>
  )
}

export default Projects