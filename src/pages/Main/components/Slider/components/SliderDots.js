import { dataSlider } from '../data'

const SliderDots = ({ index, moveDot }) => {
  return (
    <div className="slider__dots">
      {dataSlider.map((_, i) =>
        <div
          key={i}
          className={index === i ? 'slider__dot active' : 'slider__dot'}
          onClick={() => moveDot(i)}
        ></div>
      )}
    </div>
  )
}

export default SliderDots