import { useEffect, useState } from 'react'
import ProjectsRequest from '../Progects/components/Request'
import BreadcrumbLink from '@components/BreadcrumbLink'
import Tab from '@components/UI/Tab'
import ServicesRepair from './components/ServicesRepair'
import ServicesDesign from './components/ServicesDesign'

const Services = () => {
  const [tab, setTab] = useState('')

  function handleTabs(e) {
    if (e.target.textContent === 'Repair') {
      setTab('ServicesRepair')
    } else {
      setTab('ServicesDesign')
    }
  }

  useEffect(() => {
    setTab('ServicesDesign')
  }, [])

  return (
    <main style={{marginBottom: '50px'}}>
      <div className="container">
        <div className="breadcrumbs">
          <BreadcrumbLink src="/" title="Home" />
          <BreadcrumbLink src="/services" title="Services" />
        </div>

        <div className="tabs">
          <Tab
            title="3D-Design"
            active={tab === 'ServicesDesign' ? 'active' : ''}
            handleTabs={handleTabs}
          />
          <Tab
            title="Repair"
            active={tab === 'ServicesRepair' ? 'active' : ''}
            handleTabs={handleTabs}
          />
        </div>
        {tab === 'ServicesRepair' ? <ServicesRepair /> : <ServicesDesign />}
        <ProjectsRequest />
      </div>
    </main>
  )
}

export default Services