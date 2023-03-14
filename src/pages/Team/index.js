import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Logo from '@components/Logo'
import MenuBtn from '@ui/Buttons/MenuBtn'
import CallBtn from '@ui/Buttons/CallBtn'
import ProjectsRequest from '../Progects/components/Request'
import BreadcrumbLink from '@components/BreadcrumbLink'
import TeamAbout from './components/TeamAbout'
import TeamPeople from './components/TeamPeople'

const Team = () => {
  return (
    <>
      <Header>
        <MenuBtn/>
        <Logo/>
        <CallBtn />
      </Header>

      <main className="team" style={{marginBottom: '80px'}}>
        <div className="container">
          <div className="breadcrumbs">
            <BreadcrumbLink src="/" title="Главная" />
            <BreadcrumbLink src="/team" title="Наша команда" />
          </div>
        </div>
        <TeamAbout />
        <TeamPeople />
        
        <div className="container">
          <ProjectsRequest />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Team