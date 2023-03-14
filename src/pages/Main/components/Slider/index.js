import { useState } from 'react'

import {dataSlider} from '@data/dataSlider'
import SliderBtn from '@ui/Buttons/SliderBtn'
import SliderDots from './SliderDots'

import './slider.scss'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const moveDot = index => {
    setSlideIndex(index)
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     setSlideIndex(() => {
  //     if (slideIndex >= 3) {setSlideIndex(1)}
  //     return slideIndex + 1
  //   })
  //   }, 5000)

  //   return () => clearInterval()
  // }, [slideIndex])

  return (
    <div className="slider">
      <div className="slider__inner">
          {dataSlider.map((slide, i) =>
            <div
              key={slide.id}
              className={slideIndex === i + 1 ? "slider__slide-active" : "slider__slide"}
            >
              <img src={slide.src} alt=""/>
              <h2 className="slider__title">{slide.title}</h2>
            </div>
          )}
        <div className="slider__buttons">
          <SliderBtn className="slider__button" text="Проекты" src="/projects"/>
          <SliderBtn className="slider__button" text="Расчитать стоимость" src="/calculator"/>
        </div>
      </div>
      <SliderDots index={slideIndex} moveDot={moveDot} />
    </div>
  )
}

export default Slider