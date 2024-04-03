import Approach from './components/Approach'
import OurTeam from './components/OurTeam'
import Realization from './components/Realization'
import './teamAbout.scss'

const TeamAbout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="team-about">
          <OurTeam />
          <Approach />
          <Realization />
        </div>
      </div>
    </>
  )
}

export default TeamAbout