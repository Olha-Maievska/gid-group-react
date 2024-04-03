import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TeamPeopleItem from './components/TeamPeopleItem'
import { LoaderSmall } from '@components/Loader'
import { loadTeam } from '@store/team/team-slice'
import Error from '@components/Error'

import './teamPeople.scss'

const TeamPeople = () => {
  const { list, isLoading, isError } = useSelector(({team}) => team)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTeam())
  }, [dispatch])

  if (isLoading) return <LoaderSmall />
  
  if (isError) return <Error />

  return (
    <div className="team-people">
      <div className="container-fluid">
          <h3 className="title__page">Out team</h3>
        <div className="team-people__inner">
          {list?.map(item => 
            <TeamPeopleItem key={item.id} {...item} />
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamPeople