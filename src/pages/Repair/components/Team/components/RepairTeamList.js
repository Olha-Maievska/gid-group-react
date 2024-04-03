import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RepairTeamItem from './RepairTeamItem'
import { loadTeam } from '@store/team/team-slice'

const RepairTeamList = () => {
  const { list } = useSelector(({ team }) => team)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTeam())
  }, [dispatch])

  return (
    <div className="repair-team__inner">
      {list.slice(0, 4).map(team =>
        <RepairTeamItem key={team.id} {...team} />
      )}
    </div>
  )
}

export default RepairTeamList