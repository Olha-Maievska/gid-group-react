import TeamPeopleItem from './TeamPeopleItem'
import { teamData } from '@data/teamData'
import './teamPeople.scss'

const TeamPeople = () => {
  return (
    <div className="team-people">
      <div className="container-fluid">
          <h3 className="title__page">Команда</h3>
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