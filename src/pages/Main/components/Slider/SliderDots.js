const SliderDots = ({index, moveDot}) => {
  return (
    <div className="slider__dots">
      {Array.from({length: 3}).map((item, i) =>
        <div
          key={i}
          className={index === i + 1 ? 'slider__dot active' : 'slider__dot'}
          onClick={() => moveDot(i + 1)}
        ></div>
      )}
    </div>
  )
}

export default SliderDots