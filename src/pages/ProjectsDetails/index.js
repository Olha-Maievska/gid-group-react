import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadcrumbLink from '@components/BreadcrumbLink'
import ProjectsRequest from '../Progects/components/Request'
import Tab from '@components/UI/Tab'
import Description from './components/Description'
import Process from './components/Process'

const ProjectsDetails = () => {
  const [tab, setTab] = useState('')
  const { id } = useParams()

  function handleTabs(e) {
    if (e.target.textContent === 'Description') {
      setTab('Description')
    } else {
      setTab('Process')
    }
  }

  useEffect(() => setTab('Description'), [])

  return (
    <main>
      <div className="container">
        <div className="breadcrumbs">
          <BreadcrumbLink src="/" title="Home" />
          <BreadcrumbLink src="/projects" title="Projects" />
          <BreadcrumbLink src={`/projects/${id}`} title="Project" />
        </div>

        <div className="tabs">
          <Tab
            title="Description"
            active={tab === 'Description' ? 'active' : ''}
            handleTabs={handleTabs}
          />
          <Tab
            title="Process"
            active={tab === 'Process' ? 'active' : ''}
            handleTabs={handleTabs}
          />
        </div>
      </div>

      {tab === 'Description' ? <Description /> : <Process />}

      <div className="container">
        <div className="tabs">
          <Tab
            title="Description"
            active={tab === 'Description' ? 'active' : ''}
            handleTabs={handleTabs}
          />
          <Tab
            title="Process"
            active={tab === 'Process' ? 'active' : ''}
            handleTabs={handleTabs}
          />
        </div>

        <ProjectsRequest />
      </div>
    </main>
  )
}

export default ProjectsDetails