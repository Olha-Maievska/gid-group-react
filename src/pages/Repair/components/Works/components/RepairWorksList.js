import { useEffect, useState } from 'react'
import Slider from "react-slick";
import ProjectsItem from '@main/Projects/components/ProjectsItem'
import { useSelector, useDispatch } from 'react-redux'
import { loadProjects } from '@store/projects/projects-slice'

import '@main/Projects/projects.scss'

const RepairWorksList = ({ countSlides }) => {
  const dispatch = useDispatch()
  const { projects } = useSelector(({ projects }) => projects)
  const [items, setItems] = useState(projects.slice(0, countSlides))

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  useEffect(() => {
    dispatch(loadProjects())
  }, [])

  return (
    <div className="repair-works__inner">
      <div
        className="slider-container"
      >
        <Slider {...settings}>
          {items && items.map((item) =>
            <ProjectsItem 
              key={item.id}
              otherClass="repair-works__item"
              item={item}
            />
          )}
        </Slider>
      </div>
    </div>
  )
}

export default RepairWorksList