import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadcrumbLink from '@components/BreadcrumbLink'
import ProjectsRequest from '../Progects/components/Request'
import Tab from '@components/Tab'
import Description from './components/Description'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import Process from './components/Process'

import './projectsDetails.scss'

const ProjectsDetails = () => {
  const [tab, setTab] = useState('')
  const { id } = useParams()

  function handleTabs(e) {
    if (e.target.textContent === 'Описание') {
      setTab('Description')
    } else {
      setTab('Process')
    }
  }

  useEffect(() => setTab('Description'), [])

  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>

      <section className="view-page">
        <div className="container">
          <div className="breadcrumbs">
            <BreadcrumbLink src="/" title="Главная" />
            <BreadcrumbLink src="/projects" title="Проекты" />
            <BreadcrumbLink src={`/projects/${id}`} title="Проект" />
          </div>

          <div className="tabs">
            <Tab
              title="Описание"
              active={tab === 'Description' ? 'active' : ''}
              handleTabs={handleTabs}
            />
            <Tab
              title="Процесс"
              active={tab === 'Process' ? 'active' : ''}
              handleTabs={handleTabs}
            />
          </div>
        </div>

        {tab === 'Description' ? <Description /> : <Process />}

        <div className="container">
          <div className="tabs">
            <Tab
              title="Описание"
              active={tab === 'Description' ? 'active' : ''}
              handleTabs={handleTabs}
            />
            <Tab
              title="Процесс"
              active={tab === 'Process' ? 'active' : ''}
              handleTabs={handleTabs}
            />
          </div>

          <ProjectsRequest />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ProjectsDetails