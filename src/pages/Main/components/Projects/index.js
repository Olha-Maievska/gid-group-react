import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ProjectsList from './components/ProjectsList'
import ProjectsBtnElse from '@ui/Buttons/ProjectsBtnElse'
import { loadProjects } from '@store/projects/projects-slice'
import { LoaderSmall } from '@components/Loader'
import Error from '@components/Error'

import './projects.scss'

const Projects = () => {
  const { projects, isError, isLoading} = useSelector(({projects}) => projects)
  const dispatch = useDispatch()

  const [items] = useState(projects.slice(0, 6))
  const navigate = useNavigate()

  const addProjects = () => {
    window.scrollTo(0, 0)
    navigate('/projects')
  }

  useEffect(() => {
    dispatch(loadProjects())
    // eslint-disable-next-line
  }, [])

  if (isLoading) return <LoaderSmall />

  if (isError) {
    return <div style={{textAlign: 'center', marginBottom: '40px'}}>
     <Error />
    </div> 
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