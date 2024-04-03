import { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import ProjectsItem from '@main/Projects/components/ProjectsItem'
import { PrevArrow, NextArrow } from '@ui/Arrows'
import { useSelector, useDispatch } from 'react-redux'
import { loadProjects } from '@store/projects/projects-slice'

import '@main/Projects/projects.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RepairWorksList = ({ countSlides }) => {
  const dispatch = useDispatch()
  const { projects } = useSelector(({ projects }) => projects)
  const [items, setItems] = useState(projects.slice(0, countSlides))

  const itemsRef = useRef(null)
  const [itemsWidth, setItemsWidth] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [trackWidth, setTrackWidth] = useState(0)

  const [offset, setOffset] = useState(0)
  const [disablePrevBtn, setDisablePrevBtn] = useState(false)
  const [disableNextBtn, setDisableNextBtn] = useState(false)

  function handleRightArrowClick() {
    setOffset(offset => offset - itemWidth)
  }

  function handleLeftArrowClick() {
    setOffset(offset => offset + itemWidth)
  }

  console.log(itemWidth);
  console.log(trackWidth);

  useEffect(() => {
    if (offset >= 0) {
      setDisablePrevBtn(true)
      setDisableNextBtn(false)
    } else if (offset === -(itemWidth * 4)) {
      setDisableNextBtn(true)
      setDisablePrevBtn(false)
    } else {
      setDisableNextBtn(false)
      setDisablePrevBtn(false)
    }
  }, [offset, itemWidth])

  useEffect(() => {
    setItemsWidth(itemsRef.current.offsetWidth)
    setItemWidth(itemsWidth / 3)
    setTrackWidth(itemWidth * countSlides)
  }, [itemWidth, countSlides, itemsWidth, trackWidth])

  useEffect(() => {
    dispatch(loadProjects())
  }, [])

  return (
    <div className="repair-works__inner">
      <div
        className="repair-works__items"
          ref={itemsRef}
      >
        <div
          className="repair-works__track"
          style={{
            width: `${trackWidth}px`,
            transform: `translateX(${offset}px)`,
          }}
        >
          {items && items.map((item) =>
            <ProjectsItem 
              key={item.id}
              otherClass="repair-works__item"
              item={item}
              itemWidth={itemWidth}
            />
          )}
        </div>
      </div>
      <div>
        <PrevArrow fn={handleLeftArrowClick} disabled={disablePrevBtn} />
        <NextArrow fn={handleRightArrowClick} disabled={disableNextBtn}/>
      </div>
    </div>
  )
}

export default RepairWorksList