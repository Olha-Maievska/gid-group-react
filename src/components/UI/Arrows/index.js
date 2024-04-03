import arrowRight from './images/arrow-right-black.svg'
import arrowLeft from './images/arrow-left-black.svg'

import './arrows.scss'

const NextArrow = ({fn, disabled}) => {
  return (
    <button
      className={`arrow arrow__right ${disabled && 'arrow__disabled'}`}
      onClick={fn}
      disabled={disabled}
    >
      <img src={arrowRight} alt="arrow right" />
    </button>
  )
}

const PrevArrow = ({fn, disabled}) => {
  return (
    <button
      className={`arrow arrow__left ${disabled && 'arrow__disabled'}`}
      onClick={fn}
      disabled={disabled}
    >
      <img src={arrowLeft} alt="arrow left" />
    </button>
  )
}

export {PrevArrow, NextArrow}