import { useEffect, useState } from 'react'
import { dataSlider } from './data'
import SliderBtn from '@ui/Buttons/SliderBtn'
import SliderDots from './components/SliderDots'

import './slider.scss'
import { useSelector } from 'react-redux'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const { menu, modal } = useSelector(({modal}) => modal)

  const moveDot = index => {
    setSlideIndex(index)
  }

  useEffect(() => {
    if (slideIndex < 0) {
      setSlideIndex(dataSlider.length - 1)
    } else if (slideIndex > dataSlider.length - 1) {
      setSlideIndex(0)
    }
  }, [slideIndex])

  useEffect(() => {
    let setIntervalID = setInterval(() => {
      setSlideIndex(slideIndex + 1)
    }, 4500)

    if (menu || modal) {
      clearInterval(setIntervalID)
    }

    return () => clearInterval(setIntervalID)
  }, [slideIndex, menu, modal])

  return (
    <div className="slider">
      <div className="slider__inner">
        {dataSlider.map((slide, i) => {
          const setActiveClass = slideIndex === i ? 'active' : ''
          const setNextClass =  slideIndex === i + 1 ? 'next' : ''
          const setPrevClass = slideIndex === i - 1 ? 'prev' : ''
          const setStart = slideIndex === i + 2 ? 'prev' : ''
          const setEnd = slideIndex === i - 2 ? 'next' : ''

          return (<div
            key={slide.id}
            className={`slider__slide ${setActiveClass} ${setNextClass} ${setPrevClass} ${setEnd} ${setStart} `}
          >
            <img src={slide.src} alt="Git.Group"/>
            <h2 className="slider__title">{slide.title}</h2>
          </div>
        )})}
        <div className="slider__buttons">
          <SliderBtn className="slider__button" text="Projects" src="/projects"/>
          <SliderBtn className="slider__button" text="Calculate" src="/calculatorStyles"/>
        </div>
      </div>
      <SliderDots index={slideIndex} moveDot={moveDot} />
    </div>
  )
}

export default Slider