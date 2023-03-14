import Approach from './Approach'
import OurTeam from './OurTeam'
import Realization from './Realization'
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