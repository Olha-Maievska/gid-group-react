import { useState } from 'react'
import arrowLeft from './images/arrow-left-black.svg'
import arrowRight from './images/arrow-right-black.svg'

import './arrows.scss'

const Arrows = ({goToPrev, goToRight}) => {
  return (
    <div className="arrows">
      <div className="arrow arrow__left" onClick={goToPrev}>
        <img src={arrowLeft} alt="arrow left" />
      </div>
      <div className="arrow arrow__right" onClick={goToRight}>
        <img src={arrowRight} alt="arrow right" />
      </div>
    </div>
  )
}

export default Arrows