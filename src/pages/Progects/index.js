import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadcrumbLink from '@components/BreadcrumbLink'
import ProjectsBtnElse from '@ui/Buttons/ProjectsBtnElse'
import ProjectsList from '@main/Projects/components/ProjectsList'
import ProjectsRequest from './components/Request'
import { loadProjects } from '@store/projects/projects-slice'
import Error from '@components/Error'
import { LoaderBigger } from '@components/Loader'

import '@main/Projects/projects.scss'

const Projects = () => {
  const { projects, isLoading, isError } = useSelector(({ projects }) => projects)
  const dispatch = useDispatch()

  const [items, setItems] = useState(projects.slice(0, 6))
  const [start, setStart] = useState(6)
  const [offset, setOffset] = useState(9)
  const [isDisabled, setIsDisabled] = useState(false)

  const addProjects = () => {
    if (offset === projects.length) {
      setIsDisabled(true)
    }
    setStart(offset)
    setOffset(prev => prev + 3)
    setItems([...items, ...projects.slice(start, offset)])
  }

  useEffect(() => {
    dispatch(loadProjects())
  }, [dispatch])

  if (isLoading) return <LoaderBigger />

  if (isError) return <Error />

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

        <ProjectsRequest />
      </div>
    </main>
  )
}

export default Projects