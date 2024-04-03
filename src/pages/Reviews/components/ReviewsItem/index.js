import ReviewsClient from '../ReviewsClient'

const ReviewsItem = (item) => {
  const { text, apartment, apartmentSmall, style } = item
  
  return (
    <>
      <ReviewsClient {...item} />

      <p className="reviews__text">{text}</p>

      <div className="reviews__images">
        <div className="reviews__img--big">
          <img src={apartment} alt={style} />
        </div>
        <div className="reviews__img--small">
          <img className="reviews__img" src={apartmentSmall[0]} alt={style} />
          <img className="reviews__img" src={apartmentSmall[1]} alt={style} />
          <img className="reviews__img" src={apartmentSmall[2]} alt={style} />
        </div>
      </div>
    </>
  )
}

export default ReviewsItem