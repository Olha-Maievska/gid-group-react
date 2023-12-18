import { useEffect, useRef, useState } from 'react'
import ProjectsItem from '@main/Projects/ProjectsItem'
import {PrevArrow, NextArrow} from '@components/Arrows'
import { projectsData } from '@data/projectsData'

const RepairWorksList = () => {
  const itemsRef = useRef()
  const [offset, setOffset] = useState(0)
  // const [width, setWidth] = useState(1580)
  const [pages, setPages] = useState([])
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const oneItemWidth = itemsRef.current.clientWidth / 3

  function handleLeftArrowClick() {
    // console.log(oneItemWidth);
    // if (offset === 0) {
    //   setTimeout(() => {
    //     setOffset( -oneItemWidth)
    //   }, 300)
    //   return
    // } else {
    //   setOffset((currentOffset) => {
    //     const newOffset = currentOffset + width
    //     return Math.min(newOffset, 0)
    //   })
    // }
  }

  function handleRightArrowClick() {
    // console.log(oneItemWidth);
    // if (offset === -(width * 2)) {
    //   setOffset(0)
    // } else {
    //   setOffset((currentOffset) => {
    //     const newOffset = currentOffset - oneItemWidth
    //     return Math.min(newOffset, 0)
    //   })
    // }
  }

  // useEffect(() => {
  //   if (windowWidth <= 1750) {
  //     setOffset(0)
  //     setPages(projectsData.slice(0, 6))
  //   } else {
  //     setPages(projectsData.slice(0, 9))
  //   }
  // }, [windowWidth])

  return (
    <div className="repair-works__inner">
      <div className="repair-works__items" ref={itemsRef}>
        <div
          className="repair-works__track"
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