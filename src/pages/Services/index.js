import {
  useEffect, useState} from 'react'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import ProjectsRequest from '../Progects/components/Request'
import BreadcrumbLink from '@components/BreadcrumbLink'
import Tab from '@components/Tab'
import ServicesRepair from './components/ServicesRepair'
import ServicesDesign from './components/ServicesDesign'

const Services = () => {
  const [tab, setTab] = useState('')

  function handleTabs(e) {
    if (e.target.textContent === 'Ремонт') {
      setTab('ServicesRepair')
    } else {
      setTab('ServicesDesign')
    }
  }

  useEffect(() => setTab('ServicesDesign'), [])

  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>
      <main style={{marginBottom: '50px'}}>
        <div className="container">
          <div className="breadcrumbs">
            <BreadcrumbLink src="/" title="Главная" />
            <BreadcrumbLink src="/services" title="Услуги" />
          </div>

          <div className="tabs">
            <Tab
              title="3D-дизайн"
              active={tab === 'ServicesDesign' ? 'active' : ''}
              handleTabs={handleTabs}
            />
            <Tab
              title="Ремонт"
              active={tab === 'ServicesRepair' ? 'active' : ''}
              handleTabs={handleTabs}
            />
          </div>
          {tab === 'ServicesRepair' ? <ServicesRepair /> : <ServicesDesign />}
          <ProjectsRequest />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Services