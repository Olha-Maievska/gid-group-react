import { useEffect, useState } from 'react'
import BreadcrumbLink from '@components/BreadcrumbLink'
import ProjectsList from '@main/Projects/ProjectsList'
import ProjectsBtnElse from '@ui/Buttons/ProjectsBtnElse'
import Loader from '@components/Loader'
import ProjectsRequest from './components/Request'
import { projectsData } from '@data/projectsData'

const Projects = () => {
  const [items, setItems] = useState([])
  const [offset, setOffset] = useState(9)
  const [start, setStart] = useState(6)
  const [loading, setLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const addProjects = () => {
    if (offset === 12) {
      setIsDisabled(true)
    }
    setLoading(true)
    setStart(offset)
    setOffset(prev => prev + 3)
    setItems([...items, ...projectsData.slice(start, offset)])
    setLoading(false)
  }

  useEffect(() => {
    setItems(projectsData.slice(0, 6))
  }, [])

  return (
    <main className="projects-page">
      <div className="container">
        <div className="breadcrumbs">
          <BreadcrumbLink src="/" title="Home" />
          <BreadcrumbLink src="/projects" title="Projects" />
        </div>

        <ProjectsList data={items} />
        {loading && <Loader />}
        <ProjectsBtnElse
          text="Another project"
          isDisabled={isDisabled}
          fn={addProjects}
        />

        <ProjectsRequest />
      </div>
    </main>
  )
}

export default Projects