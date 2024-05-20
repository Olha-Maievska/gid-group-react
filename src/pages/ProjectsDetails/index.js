import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BreadcrumbLink from '@components/BreadcrumbLink'
import Request from '@components/Request'
import Tab from '@components/UI/Tab'
import Description from './components/Description'
import Process from './components/Process'

const ProjectsDetails = () => {
  const [tab, setTab] = useState('')
  const { project } = useSelector(({ projects }) => projects)

  function handleTabs(e) {
    if (e.target.textContent === 'Description') {
      setTab('Description')
    } else {
      setTab('Process')
    }
  }

  useEffect(() => {
    setTab('Description')
  }, [])

  return (
    <main>
      <div className="container">
        <div className="breadcrumbs">
          <BreadcrumbLink src="/" title="Home" />
          <BreadcrumbLink src="/projects" title="Projects" />
          <BreadcrumbLink src={`/projects/${project.id}`} title="Project" />
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

        {tab === 'Description' ? <Description item={project} /> : <Process item={project} />}

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
      
        <Request />
      </div>
    </main>
  )
}

export default ProjectsDetails