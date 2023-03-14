import { useEffect, useRef, useState } from 'react'
import ProjectsItem from '@main/Projects/ProjectsItem'
import {PrevArrow, NextArrow} from '@components/Arrows'
import { projectsData } from '@data/projectsData'

const RepairWorksList = () => {
  const itemsRef = useRef()
  const [offset, setOffset] = useState(0)
  const [width, setWidth] = useState(1580)
  const [pages, setPages] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function handleLeftArrowClick() {
    if (offset === 0) {
      setTimeout(() => {
        setOffset( -(width * 2))
      }, 300)
      return
    } else {
      setOffset((currentOffset) => {
        const newOffset = currentOffset + width
        return Math.min(newOffset, 0)
      })
    }
  }

  function handleRightArrowClick() {
    if (offset === -(width * 2)) {
      setOffset(0)
    } else {
      setOffset((currentOffset) => {
        const newOffset = currentOffset - width
        return Math.min(newOffset, 0)
      })
    }
  }

  useEffect(() => {
    console.log((windowWidth));
    if (windowWidth <= 1750) {
      setOffset(0)
      setPages(projectsData.slice(0, 6))
    } else {
      setPages(projectsData.slice(0, 9))
    }
  }, [windowWidth])

  return (
    <div className="repair-works__inner">
      <div className="repair-works__items" >
        <div
          className="repair-works__track"
          ref={itemsRef}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages.map(item =>
            <ProjectsItem key={item.id} {...item} />
          )}
        </div>
      </div>
      <div>
        <PrevArrow fn={handleLeftArrowClick} />
        <NextArrow fn={handleRightArrowClick} />
      </div>
    </div>
  )
}

export default RepairWorksList