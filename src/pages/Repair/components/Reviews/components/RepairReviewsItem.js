import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ReviewsClient from '@reviews/components/ReviewsClient'
import { openPage } from '@utils/utils'
import { addOneReview } from '@store/reviews/reviews-slice'

const RepairReviewsItem = (item) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function toReview() {
    navigate(`/reviews/${item.id}`)
    dispatch(addOneReview(item))
  }

  const { className, style, text, apartment} = item
  return (
    <div className={className}>
      <div className="repair-review__content">
        <ReviewsClient {...item} />
        <p className="repair-review__text">{text.slice(0, 300)}...</p>
        <button
          className="repair-review__btn"
          onClick={() => openPage(toReview)}
        >
          Read more
        </button>
      </div>

      <div className="repair-review__images">
        <img src={apartment} alt={style} />
      </div>
    </div>
  )
}

export default RepairReviewsItem