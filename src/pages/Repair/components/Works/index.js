import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectsData } from '@data/projectsData'
import RepairWorksList from './RepairWorksList'

import './repairWorks.scss'
import ProjectsBtnElse from '@components/UI/Buttons/ProjectsBtnElse'

const RepairWorks = () => {
  const [items, setItems] = useState([])
  const [offset, setOffset] = useState(6)
  const [start, setStart] = useState(0)
  const navigate = useNavigate()

  function addProjects() {
    window.scrollTo(0, 0)
    navigate('/projects')
  }

  useEffect(() => {
    setItems(projectsData.slice(start, offset))
  }, [offset, start])

  return (
    <div className="repair-works">
      <h2 className="title">ВЫПОЛНЕННЫЕ РАБОТЫ</h2>
      <div className="container">
        <RepairWorksList data={items} />
        <ProjectsBtnElse text="Портфолио" arrowRound={false} addProject={addProjects} />
      </div>
    </div>
  )
}

export default RepairWorks