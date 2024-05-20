import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectsList from './components/ProjectsList'
import ProjectsBtnElse from '@ui/Buttons/ProjectsBtnElse'
import { projectsData } from '@projects/data'

import './projects.scss'

const Projects = () => {
  const [items] = useState(projectsData.slice(0, 6))
  const navigate = useNavigate()

  const addProjects = () => {
    navigate('/projects')
  }

  return (
    <section className="projects">
      <h2 className="title">OUR PROJECTS</h2>
      <ProjectsList data={items} />
      <ProjectsBtnElse text="More projects" fn={addProjects} />
    </section>
  )
}

export default Projects