const SliderList = ({ data, index }) => {
  function handleActiveClass(slidesIndex, slideIndex) {
    if (slidesIndex === slideIndex) {
      return "slider__slide-active"
    } else if (index > slideIndex) {
      return "slider__slide-prev"
    } else {
      return "slider__slide-next"
    }
  }

  return (
    <>
      {data.map((slide, i) =>
        <div
          key={slide.id}
          className={() => handleActiveClass(index === i)}
        >
          <img src={slide.src} alt="Git.Group"/>
          <h2 className="slider__title">{slide.title}</h2>
        </div>
      )}
    </>
  )
}

export default SliderList
