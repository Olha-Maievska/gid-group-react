import { useEffect, useState } from 'react'
import { dataSlider } from '@data/dataSlider'
import SliderBtn from '@ui/Buttons/SliderBtn'
import SliderDots from './SliderDots'

import './slider.scss'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

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

  // useEffect(() => {
  //   let setIntervalID = setInterval(() => {
  //     setSlideIndex(slideIndex + 1)
  //   }, 3000)

  //   return () => clearInterval(setIntervalID)
  // }, [slideIndex])

  return (
    <div className="slider">
      <div className="slider__inner">
          {dataSlider.map((slide, i) =>
            <div
              key={slide.id}
              className={slideIndex === i ? "slider__slide-active" : "slider__slide"}
            >
              <img src={slide.src} alt=""/>
              <h2 className="slider__title">{slide.title}</h2>
            </div>
          )}
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