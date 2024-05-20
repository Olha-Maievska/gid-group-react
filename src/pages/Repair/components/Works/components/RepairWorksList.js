import { useState } from 'react'
import Slider from "react-slick";
import ProjectsItem from '@main/Projects/components/ProjectsItem'
import { projectsData } from '@projects/data';

import '@main/Projects/projects.scss'

const RepairWorksList = ({ countSlides }) => {
  const [items] = useState(projectsData.slice(0, countSlides))

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