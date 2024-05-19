import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RepairTeamItem from './RepairTeamItem'
import { loadTeam } from '@store/team/team-slice'
import Error from '@components/Error'

const RepairTeamList = () => {
  const { list, isError } = useSelector(({ team }) => team)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTeam())
  }, [dispatch])

  if (isError) {
    return <div style={{textAlign: 'center', marginBottom: '40px'}}>
     <Error />
    </div> 
  }
  
  return (
    <div className="repair-team__inner">
      {list.slice(0, 4).map(team =>
        <RepairTeamItem key={team.id} {...team} />
      )}
    </div>
  )
}

export default RepairTeamList