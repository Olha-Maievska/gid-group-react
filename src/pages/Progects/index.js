import { useEffect, useState } from 'react'

import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import BreadcrumbLink from '@components/BreadcrumbLink'
import ProjectsList from '@main/Projects/ProjectsList'
import Tabs from './components/Tabs'
import ProjectsBtnElse from '@ui/Buttons/ProjectsBtnElse'
import Loader from '@components/Loader'
import ProjectsRequest from './components/Request'
import { projectsData } from '@data/projectsData'

const Projects = () => {
  const [items, setItems] = useState([])
  const [offset, setOffset] = useState(6)
  const [start, setStart] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const addProjects = () => {
    if (offset === 12) {
      setIsDisabled(true)
    }
    setLoading(true)
    setStart(offset)
    setOffset(prev => prev + 3)
    setItems(item => [...item, ...projectsData.slice(start, offset)])
    setLoading(false)
  }

  useEffect(() => {
    setItems(projectsData.slice(start, offset))
  }, [offset, start])

  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>

      <section className="projects-page">
        <div className="container">
          <div>
            <BreadcrumbLink src="/" title="Главная" />
            <BreadcrumbLink src="/projects" title="Проекты" />
          </div>

          <Tabs />

          <ProjectsList data={items} />
          {loading && <Loader />}
          <ProjectsBtnElse
            text="Еще проекты"
            isDisabled={isDisabled}
            addProject={addProjects}
          />

          <ProjectsRequest />
        </div>
      </section>
    <Footer />
    </>
  )
}

export default Projects