import { teamData } from './data'
import TeamPeopleItem from './components/TeamPeopleItem'

import './teamPeople.scss'

const TeamPeople = () => {
  return (
    <div className="team-people">
      <div className="container-fluid">
          <h3 className="title__page">Out team</h3>
        <div className="team-people__inner">
          {teamData.map(item => 
            <TeamPeopleItem key={item.id} {...item} />
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamPeople