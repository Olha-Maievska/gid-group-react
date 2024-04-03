import ProjectsRequest from '../Progects/components/Request'
import BreadcrumbLink from '@components/BreadcrumbLink'
import TeamAbout from './components/TeamAbout'
import TeamPeople from './components/TeamPeople'

const Team = () => {
  return (
    <section className="team" style={{marginBottom: '80px'}}>
      <div className="container">
        <div className="breadcrumbs">
          <BreadcrumbLink src="/" title="Home" />
          <BreadcrumbLink src="/team" title="Our team" />
        </div>
      </div>
      
      <TeamAbout />
      <TeamPeople />
      
      <div className="container">
        <ProjectsRequest />
      </div>
    </section>
  )
}

export default Team