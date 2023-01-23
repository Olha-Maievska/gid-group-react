import { useRef, useState } from 'react'
import ProjectsItem from '@main/Projects/ProjectsItem'
import Arrows from '@components/Arrows'

const RepairWorksList = ({ data = [] }) => {
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)
  const wrapper = useRef()
  let position = 0

  function goToPrev() {
    if (position === 0) {
      setPrev(true)
    } else {
      setPrev(false)
      position += 566
      wrapper.current.childNodes.forEach(item => {
        item.style.transform = `translateX(${position}px)`
      })
    }
  }

  function goToRight() {
    if (position ===  -(data.length - 3) * 566 + 566) {
      setNext(true)
      setPrev(false)
    } else {
      setPrev(false)
      position -= 566
      wrapper.current.childNodes.forEach(item => {
        item.style.transform = `translateX(${position}px)`
      })
    }
  }

  return (
    <div className="repair-works__inner">
      <div className="repair-works__items">
        <div className="repair-works__track" ref={wrapper}>
          {data.map(item =>
            <ProjectsItem key={item.id} {...item} />
          )}
        </div>
      </div>
      <Arrows goToPrev={goToPrev} goToRight={goToRight} />
    </div>
  )
}

export default RepairWorksList