import { teamData } from '@team/components/TeamPeople/data'
import RepairTeamItem from './RepairTeamItem'

const RepairTeamList = () => {
  return (
    <div className="repair-team__inner">
      {teamData.slice(0, 4).map(team =>
        <RepairTeamItem key={team.id} {...team} />
      )}
    </div>
  )
}

export default RepairTeamList