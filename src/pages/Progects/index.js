import { useState } from 'react'
import BreadcrumbLink from '@components/BreadcrumbLink'
import ProjectsBtnElse from '@ui/Buttons/ProjectsBtnElse'
import ProjectsList from '@main/Projects/components/ProjectsList'
import Request from '@components/Request'
import { projectsData } from './data'

import '@main/Projects/projects.scss'

const Projects = () => {
  const [items, setItems] = useState(projectsData.slice(0, 6))
  const [start, setStart] = useState(6)
  const [offset, setOffset] = useState(9)
  const [isDisabled, setIsDisabled] = useState(false)

  const addProjects = () => {
    if (offset === projectsData.length) {
      setIsDisabled(true)
    }
    setStart(offset)
    setOffset(prev => prev + 3)
    setItems([...items, ...projectsData.slice(start, offset)])
  }

  return (
    <main className="projects-page">
      <div className="container">
        <div className="breadcrumbs">
          <BreadcrumbLink src="/" title="Home" />
          <BreadcrumbLink src="/projects" title="Projects" />
        </div>

        <ProjectsList data={items} />
        <ProjectsBtnElse
          text="Another projects"
          fn={addProjects}
          isDisabled={isDisabled}
        />

        <Request />
      </div>
    </main>
  )
}

export default Projects