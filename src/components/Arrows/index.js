import arrowRight from './images/arrow-right-black.svg'
import arrowLeft from './images/arrow-left-black.svg'

import './arrows.scss'

const NextArrow = ({fn}) => {
  return (
    <div className="arrow arrow__right" onClick={fn}>
      <img src={arrowRight} alt="arrow right" />
    </div>
  )
}

const PrevArrow = ({fn}) => {
  return (
    <div className="arrow arrow__left" onClick={fn}>
      <img src={arrowLeft} alt="arrow left" />
    </div>
  )
}

export {PrevArrow, NextArrow}